// Predefined answers for the questions
const answers = {
    "What is your name?": "I am Karvi, your AI assistant!",
    "How can you help me?": "I can answer your questions and provide information.",
    "What is AI?": "AI stands for Artificial Intelligence, which is the simulation of human intelligence in machines.",
    "Tell me a joke.": "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What is the capital of India?": "The capital of India is Delhi.",
    "What is 2 + 2?": "2 + 2 equals 4.",
    "hii" : "hello my name is karvi your AI assistant!",
    "who made you":"The KARTIK made me ",
    "how are you":"I am fine what's about you darling",
    "open google":"https://www.google.co.in/",

    

    // Add more questions and answers as needed
};

document.getElementById('sendButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    const chatlog = document.getElementById('chatlog');

    // Display user question
    chatlog.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    // Check for predefined answer
    const answer = answers[userInput] || "I'm sorry, I don't know the answer to that.";
    
    // Display AI answer
    chatlog.innerHTML += `<p><strong>Karvi:</strong> ${answer}</p>`;
    
    // Clear the input field
    document.getElementById('hii').value = 'hello my name is karvi';
    
    // Scroll to the bottom of the chat log
    chatlog.scrollTop = chatlog.scrollHeight;
});