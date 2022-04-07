# 全沾开发中的访问控制思考

计算机科学中，访问控制（Access Control，AC）一般包括认证（Authentication）、授权（Authorization）和审计（Audit）。

请注意，认证（Authentication）和授权（Authorization）不同。简单来说，认证是验证用户是谁的过程，而授权是验证他们可以访问什么的过程。

## 为什么需要访问控制

我们可以反过来问，没有访问控制会发生什么？服务器上的资源可以被随意操作，操作无法被区分是合法还是非法的。

为了保护服务器上的资源（术语称为客体）不被用户（无论是善意用户还是恶意用户，术语称为主体）随意操作，需要引入访问控制。

## 访问控制模型 Access Control Models

我在开发中常见的访问控制模型如下：

- 基于身份的访问控制（Identity-Based Access Control，IBAC）
- 基于角色的访问控制（Role-Based Access Control，RBAC）
- 基于属性的访问控制（Attribute-based Access Control，ABAC）

在实际开发里面，可能只使用一种访问控制模型，也可能组合使用多种访问控制模型。极端情况下，因为历史遗留，使用的访问控制模型也可能不属于业界任意一种。

### 基于身份的访问控制 IBAC

IBAC 应该是最古老的访问控制模型了，至今你仍然可以在你的操作系统上看到它的影子。IBAC 使用访问控制列表 ACL 来做访问控制。

| User  | File A      | File B      |
| ----- | ----------- | ----------- |
| Alice | Read, Write | Read        |
| Bob   | Read, Write | Read, Write |

ACL 用于记录不同主体可以对不同客体进行的操作。全局应该有一个默认的 ACL，每个客体另外维护着它自己的 ACL。

缺陷也是显而易见的。每次操作客体都要检查其 ACL，在频繁、大量操作客体时效率较慢。另外，如果大量客体需要自定义 ACL，ACL 也难以维护。很不建议在新系统里使用 ACL 做访问控制。

### 基于角色的访问控制 RBAC

| User  | Role    | Resource A  | Resource B |
| ----- | ------- | ----------- | ---------- |
| Bob   | ADMIN   | Read, Write | Read,Write |
| Alice | MANAGER | Read, Write | Read       |

引入了角色/角色组概念，通过给用户赋予角色，或者把用户分配到角色组，减少了分配权限的操作次数，简化了访问控制，也更方便集中维护访问控制。

RBAC 的劣势在于粒度，很难合理且细粒度地在实际业务里定义某个主体或某个客体的权限。如果有这种需求，最简单直接也是唯一的方法是不停地增加角色以满足需求，最后难以控制腐化。

以下是一个例子，C 表示 Create，R 表示 Read，U 表示 Update，D 表示 Delete。

| User  | Resource A | Resource B | Resource C | Resource D | Resource E |
| ----- | ---------- | ---------- | ---------- | ---------- | ---------- |
| Bob   | C R U D    | C R U D    | C R U D    | C R U D    | C R U D    |
| Alice | C R U      | C R U      | C R U      | C R U      | C R U      |
| Cathy | R          | C R U      | R          | C R U      | R          |
| David | C R U      | R          | C R U      | R          | C R U      |
| Emma  | R          | R          | R          | R          | R          |

可以看到现在角色已经需要至少五种。如果再逐渐增加 Resource 和用户，排列组合更多，势必需要更多的角色。

### 基于属性的访问控制 ABAC

| User  | Attribute                              | Resource A | Resource B |
| ----- | -------------------------------------- | ---------- | ---------- |
| Bob   | CanAccessResourceA, CanAccessResourceB | C R U D    | C R U D    |
| Alice | CanAccessResourceA, CanReadResourceB   | C R U D    | R          |

引入了属性概念来做访问控制。RBAC 的劣势就是 ABAC 的优势，ABAC 可以很轻松地控制颗粒度；RBAC 的优势就是 ABAC 的劣势，ABAC 相对于 RBAC 复杂度更高。

## 小结

可以看到，不同的访问控制模型本质上是复杂度和颗粒度的平衡与取舍。在实际开发中，我更建议直接上 ABAC。

除了上面说的三种访问控制模型，业界还有很多访问控制模型。在实际开发中，也有一些访问控制值得研究，比如 AWS 使用的 Identity and Access Management IAM。感兴趣可以自行学习。

参考链接如下：

- [Access Control](https://en.wikipedia.org/wiki/Access_control)
- [Authentication vs. Authorization](https://auth0.com/docs/get-started/identity-fundamentals/authentication-and-authorization)
