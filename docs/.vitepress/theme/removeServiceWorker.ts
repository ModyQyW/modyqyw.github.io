// eslint-disable-next-line unicorn/prefer-top-level-await
(async () => {
  console.log('in remove');
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
