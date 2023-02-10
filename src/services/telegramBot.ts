export const sendFeedbackBot = (message: string) => {
  const chatId = import.meta.env.VITE_APP_GROUP_CHAT_ID
  const token = import.meta.env.VITE_APP_BOT_API
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`
  return fetch(url)
}
