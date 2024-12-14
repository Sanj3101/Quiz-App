
    // const fetchQuestions = async()=>
    //   {
    //     const url = `https://quizapi.io/api/v1/questions?apiKey=W4fjxXn5Y1NVzGcJpldKrkhv2nRzLRAsopRi2PWu\&category=react&difficulty=Medium&limit=10`
    //     const response = await fetch(url);
    //     const json= await response.json();
    //     return json;
    //   }
      
    //  export const Questions = await fetchQuestions();
    // console.log(Questions);

    export const Questions=[
      {
        id: 1734,
        question: 'How does React handle SVG elements differently from regular HTML elements?',
        description: "Understanding React's SVG handling capabilities.",
        answers: {
          answer_a: 'SVG elements must be wrapped in a special component',
          answer_b: 'React automatically camelCases SVG attributes and handles namespace',
          answer_c: "SVG elements can't be used in React",
          answer_d: 'SVG elements require manual DOM manipulation',
          answer_e: null,
          answer_f: null
        },
        multiple_correct_answers: 'false',
        correct_answers: {
          answer_a_correct: 'false',
          answer_b_correct: 'true',
          answer_c_correct: 'false',
          answer_d_correct: 'false',
          answer_e_correct: 'false',
          answer_f_correct: 'false'
        },
        correct_answer: null,
        explanation: 'React automatically handles SVG namespacing and converts SVG attribute names to their camelCase versions (e.g., stroke-width becomes strokeWidth) while maintaining proper SVG functionality and compatibility.',
        tip: null,
        tags: [ [Object] ],
        category: 'React',
        difficulty: 'Medium'
      },
      {
        id: 1669,
        question: 'What is the difference between server-side and client-side routing in React?',
        description: 'Understanding routing patterns in React applications.',
        answers: {
          answer_a: 'Server-side routing is faster than client-side routing',
          answer_b: 'Server-side routing requires a new page load, while client-side handles transitions without page refresh',
          answer_c: 'Client-side routing only works with React Router',
          answer_d: 'There is no difference in modern applications',
          answer_e: null,
          answer_f: null
        },
        multiple_correct_answers: 'false',
        correct_answers: {
          answer_a_correct: 'false',
          answer_b_correct: 'true',
          answer_c_correct: 'false',
          answer_d_correct: 'false',
          answer_e_correct: 'false',
          answer_f_correct: 'false'
        },
        correct_answer: null,
        explanation: 'Server-side routing involves making new requests to the server for each route change, resulting in full page reloads. Client-side routing handles route changes in the browser by updating the URL and rendering different components without refreshing the page, providing a smoother user experience.',
        tip: null,
        tags: [ [Object] ],
        category: 'React',
        difficulty: 'Medium'
      },
      {
        id: 1645,
        question: 'What happens when you call useState with a function as the initial state?',
        description: 'Understanding advanced useState patterns in React.',
        answers: {
          answer_a: 'The function is used as the state value itself',
          answer_b: 'The function is called only once during initialization to compute the initial state',
          answer_c: 'The function is called on every render',
          answer_d: "useState doesn't accept functions as initial state",
          answer_e: null,
          answer_f: null
        },
        multiple_correct_answers: 'false',
        correct_answers: {
          answer_a_correct: 'false',
          answer_b_correct: 'true',
          answer_c_correct: 'false',
          answer_d_correct: 'false',
          answer_e_correct: 'false',
          answer_f_correct: 'false'
        },
        correct_answer: null,
        explanation: 'When you pass a function to useState as the initial state argument, React will only call this function during the initial render to compute the initial state. This is called lazy initialization and is useful when the initial state computation is expensive.',
        tip: null,
        tags: [ [Object] ],
        category: 'React',
        difficulty: 'Medium'
      },
      {
        id: 1636,
        question: 'What is the primary difference between using refs created with useRef versus createRef?',
        description: "Understanding React's ref creation methods and their implications.",
        answers: {
          answer_a: 'createRef is faster than useRef',
          answer_b: 'useRef returns the same ref object on every render, while createRef returns a new one each time',
          answer_c: 'createRef can only be used with class components',
          answer_d: 'useRef can only store DOM references',
          answer_e: null,
          answer_f: null
        },
        multiple_correct_answers: 'false',
        correct_answers: {
          answer_a_correct: 'false',
          answer_b_correct: 'true',
          answer_c_correct: 'false',
          answer_d_correct: 'false',
          answer_e_correct: 'false',
          answer_f_correct: 'false'
        },
        correct_answer: null,
        explanation: 'useRef returns the same ref object on every render, maintaining a consistent reference, while createRef creates a new ref object on every render. This makes useRef more suitable for functional components where you want to maintain a persistent reference across renders.',
        tip: null,
        tags: [ [Object] ],
        category: 'React',
        difficulty: 'Medium'
      },
      {
        id: 1664,
        question: "What is the significance of the 'displayName' property in React components?",
        description: 'Understanding React component debugging and development tools.',
        answers: {
          answer_a: "It's required for the component to render",
          answer_b: 'It provides a better debugging experience in React DevTools',
          answer_c: "It's used for SEO purposes",
          answer_d: 'It affects component performance',
          answer_e: null,
          answer_f: null
        },
        multiple_correct_answers: 'false',
        correct_answers: {
          answer_a_correct: 'false',
          answer_b_correct: 'true',
          answer_c_correct: 'false',
          answer_d_correct: 'false',
          answer_e_correct: 'false',
          answer_f_correct: 'false'
        },
        correct_answer: null,
        explanation: 'The displayName property is primarily used to provide a meaningful name for your component in React DevTools, especially useful for debugging higher-order components or components created by other functions where the default name inference might not be helpful.',
        tip: null,
        tags: [ [Object] ],
        category: 'React',
        difficulty: 'Medium'
      },
      {
        id: 1749,
        question: 'What is the purpose of the key prop in reconciliation?',
        description: "Understanding React's diffing algorithm.",
        answers: {
          answer_a: 'To style elements',
          answer_b: 'To help React identify which items have changed, been added, or removed',
          answer_c: 'To improve performance',
          answer_d: 'To handle events',
          answer_e: null,
          answer_f: null
        },
        multiple_correct_answers: 'false',
        correct_answers: {
          answer_a_correct: 'false',
          answer_b_correct: 'true',
          answer_c_correct: 'false',
          answer_d_correct: 'false',
          answer_e_correct: 'false',
          answer_f_correct: 'false'
        },
        correct_answer: null,
        explanation: "The key prop helps React efficiently update lists by uniquely identifying elements across renders. It's crucial for React's reconciliation process to determine which items have changed and need to be re-rendered.",
        tip: null,
        tags: [ [Object] ],
        category: 'React',
        difficulty: 'Medium'
      },
      {
        id: 1678,
        question: "How does React's automatic batching in React 18 differ from previous versions?",
        description: "Understanding React 18's performance improvements.",
        answers: {
          answer_a: 'There is no difference in batching behavior',
          answer_b: 'React 18 automatically batches all state updates regardless of where they occur',
          answer_c: 'Automatic batching only works in development mode',
          answer_d: 'Batching is removed in React 18',
          answer_e: null,
          answer_f: null
        },
        multiple_correct_answers: 'false',
        correct_answers: {
          answer_a_correct: 'false',
          answer_b_correct: 'true',
          answer_c_correct: 'false',
          answer_d_correct: 'false',
          answer_e_correct: 'false',
          answer_f_correct: 'false'
        },
        correct_answer: null,
        explanation: 'React 18 introduces automatic batching for all state updates, regardless of where they occur (event handlers, timeouts, promises, etc.). Previous versions only batched updates within React event handlers. This improvement reduces unnecessary re-renders and improves performance.',
        tip: null,
        tags: [ [Object] ],
        category: 'React',
        difficulty: 'Medium'
      },
      {
        id: 1711,
        question: 'How does React handle event delegation?',
        description: "Understanding React's event handling system.",
        answers: {
          answer_a: 'Each element has its own event listener',
          answer_b: 'React uses a single event listener at the root and handles events through propagation',
          answer_c: 'Events are handled directly by the browser',
          answer_d: 'Event handling is managed by components individually',
          answer_e: null,
          answer_f: null
        },
        multiple_correct_answers: 'false',
        correct_answers: {
          answer_a_correct: 'false',
          answer_b_correct: 'true',
          answer_c_correct: 'false',
          answer_d_correct: 'false',
          answer_e_correct: 'false',
          answer_f_correct: 'false'
        },
        correct_answer: null,
        explanation: 'React implements event delegation by attaching a single event listener at the root level and managing events through its own synthetic event system. This approach is more efficient than attaching individual listeners to each element.',
        tip: null,
        tags: [ [Object] ],
        category: 'React',
        difficulty: 'Medium'
      },
      {
        id: 1623,
        question: 'What happens when you call setState with identical state values in React?',
        description: "Understanding React's state update behavior and optimization strategies.",
        answers: {
          answer_a: 'React will always re-render the component regardless of the values',
          answer_b: 'The component will throw an error for redundant updates',
          answer_c: 'React will skip the re-render if the new state is identical to the previous state (using Object.is comparison)',
          answer_d: 'The state will be reset to its initial value',
          answer_e: null,
          answer_f: null
        },
        multiple_correct_answers: 'false',
        correct_answers: {
          answer_a_correct: 'false',
          answer_b_correct: 'false',
          answer_c_correct: 'true',
          answer_d_correct: 'false',
          answer_e_correct: 'false',
          answer_f_correct: 'false'
        },
        correct_answer: null,
        explanation: 'React uses Object.is comparison to determine if the new state is different from the previous state. If they are identical, React will skip the re-render process entirely, which is an important performance optimization feature.',
        tip: null,
        tags: [ [Object] ],
        category: 'React',
        difficulty: 'Medium'
      },
      {
        id: 1631,
        question: "What is the purpose of React's StrictMode component?",
        description: "Understanding React's development tools and best practices.",
        answers: {
          answer_a: 'It enforces type checking in React applications',
          answer_b: 'It improves performance in production builds',
          answer_c: 'It highlights potential problems in development mode',
          answer_d: 'It prevents runtime errors in production',
          answer_e: null,
          answer_f: null
        },
        multiple_correct_answers: 'false',
        correct_answers: {
          answer_a_correct: 'false',
          answer_b_correct: 'false',
          answer_c_correct: 'true',
          answer_d_correct: 'false',
          answer_e_correct: 'false',
          answer_f_correct: 'false'
        },
        correct_answer: null,
        explanation: 'StrictMode is a development mode only feature that helps identify potential problems in an application by intentionally double-invoking functions and deprecating unsafe lifecycles. It helps catch bugs early by making certain problems more visible through additional checks and warnings.',
        tip: null,
        tags: [ [Object] ],
        category: 'React',
        difficulty: 'Medium'
      }
    ]
