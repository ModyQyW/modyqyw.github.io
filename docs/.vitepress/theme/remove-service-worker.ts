import isNode from 'detect-node';

(async () => {
  if (isNode) return;
  const registrations = await navigator.serviceWorker.getRegistrations();
  for (const registration of registrations) {
    if (
      registration.scope.includes('modyqyw.top') ||
      registration.scope.includes('modyqyw.github.io')
    ) {
      registration.unregister();
    }
  }
})();
