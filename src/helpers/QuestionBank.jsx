
    const fetchQuestions = async()=>
      {
        const url = `https://quizapi.io/api/v1/questions?apiKey=W4fjxXn5Y1NVzGcJpldKrkhv2nRzLRAsopRi2PWu\&category=react&difficulty=Medium&limit=10`
        const response = await fetch(url);
        const json= await response.json();
        return json;
      }
      
     export const Questions = await fetchQuestions();
    console.log(Questions);
