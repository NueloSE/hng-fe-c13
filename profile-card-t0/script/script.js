const time = document.querySelector("[data-testid='test-user-time']");
setInterval(() => (time.textContent = ` ${Date.now()}ms`), 1000);
