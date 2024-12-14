# **React Quiz App**

This is a **dynamic React-based Quiz Application** that fetches questions from an external API and allows users to take quizzes with a timer, multiple options, and score tracking.

---

## **Features**

1. **Dynamic Questions**:
   - Questions are fetched from the [QuizAPI.io](https://quizapi.io/) API dynamically.
   - You can configure the category, difficulty, and question limit.

2. **Timer for Each Question**:
   - Each question has a **10-second countdown**.
   - Automatically moves to the next question if time runs out.

3. **Multiple Options**:
   - Supports multiple choice answers.
   - Displays options dynamically (including `answer_e` and `answer_f` if provided by the API).

4. **Feedback Alerts**:
   - Provides **real-time feedback** using SweetAlert2:
     - Success: If the selected answer is correct.
     - Error: If the answer is incorrect.

5. **Score Tracking**:
   - Tracks and updates the user’s score based on correct answers.

6. **Game Finish State**:
   - Allows users to **submit the quiz** or finish it early.
   - Score can be displayed on a separate end screen.

---

## **Technologies Used**

- **React**: For building the user interface.
- **SweetAlert2**: For interactive alert popups.
- **QuizAPI**: External API to fetch quiz questions.
- **CSS**: For styling components.

---

## **Setup and Installation**

Follow these steps to get the app running locally:

### Prerequisites:
Make sure you have the following installed:
- **Node.js** (v14+)
- **npm** or **yarn**
- A QuizAPI.io API key.

---

### Steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/react-quiz-app.git
   cd react-quiz-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Add your API Key**:
   - Go to [QuizAPI.io](https://quizapi.io) and create a free account.
   - Replace the `apiKey` in `QuestionBank.jsx` with your **API key**.

   Example:
   ```javascript
   const url = `https://quizapi.io/api/v1/questions?apiKey=YOUR_API_KEY&category=react&difficulty=Medium&limit=10`;
   ```

4. **Run the application**:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

5. Open your browser at `http://localhost:3000` to see the quiz app in action.

---

## **Project Structure**

```
src/
│
├── components/
│   └── Quiz.jsx         # Main quiz component
│
├── helpers/
│   ├── QuestionBank.jsx # Fetches questions dynamically
│   ├── context.js       # Context API for state management
│
├── App.jsx              # Main App component
├── index.css            # Global styling
└── index.js             # Entry point
```

---

## **How to Play**

1. **Start the quiz**:
   - Questions will load dynamically.
   - A timer starts for each question (10 seconds).

2. **Select an answer**:
   - Choose one of the multiple options for the current question.

3. **Submit or Move to the Next Question**:
   - Click **Submit** to check your answer.
   - Click **Next** to proceed to the next question.

4. **Finish the quiz**:
   - You can click **Finish** to end the game early.

5. **Score Feedback**:
   - Your score will be displayed at the end.

---

## **API Configuration**

The app fetches questions using **QuizAPI**. By default:
- **Category**: React
- **Difficulty**: Medium
- **Question Limit**: 10

You can change these in the `QuestionBank.jsx` file.

Example:
```javascript
const url = `https://quizapi.io/api/v1/questions?apiKey=YOUR_API_KEY&category=javascript&difficulty=Easy&limit=5`;
```

---

## **Dependencies**

- **React**: `^18.x`
- **SweetAlert2**: `^11.x`
- **Fetch API**: Native support for HTTP requests.

---

## **Future Improvements**

1. Add a results page to display the user's score and correct/incorrect answers.
2. Implement a leaderboard feature.
3. Add support for more question categories and difficulties.
4. Improve UI/UX with animations and better styling.

---

## **Contributing**

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add new feature"`.
4. Push to your branch: `git push origin feature-name`.
5. Open a pull request.

---

Enjoy the quiz! 🚀
