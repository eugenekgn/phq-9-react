- Project will run on http://localhost:9001


- ideal model set up, but I am storing everything in denormalized way to save time

```$js
    
    class Question {
        id: Number,
        text: String 
    }
    
    class AnswerType {
        id: Number,
        content: Number
    }
        
    // Many to many map
    class Answers {
        id: Number,
        question_id : Number
        answer_id: Number
    }
    
    
```
 

