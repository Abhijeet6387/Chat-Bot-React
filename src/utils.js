export const analyze = (text) => {
  if (
    text.includes("hi") ||
    text.includes("hello") ||
    text.includes("Hi") ||
    text.includes("Hello")
  )
    return "Hi, How can I help you? ";
  else if (text.includes("bye")) return "Bye";
  else return "I could'nt understand, Can you rephrase the message?";
};
