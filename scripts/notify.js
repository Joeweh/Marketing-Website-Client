function displayDesktopNotification(title, body)
{
  const notification = new Notification(title, {
    body: body
  })
}

Notification.requestPermission().then(permission => {
  displayDesktopNotification("Title", "Body")
})