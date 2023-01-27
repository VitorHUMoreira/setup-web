self.addEventListener("push", function (event) {
  const body = event.data?.text() ?? "";

  event.waitUnitl(
    self.registration.showNotification("Habits", {
      body,
    })
  );
});
