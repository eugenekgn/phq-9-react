- Project will run on http://localhost:9001
- taking a shortcut with css, not using webpack loaders to save time


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
    
    class Form {
        id: Number,
        name: Stromg
    }
    
    // Many to many map
    class Answers {
            
        id: Number,
        form_id: Number
        question_id : Number
        answer_id: Number
    }
    
    
```
 

