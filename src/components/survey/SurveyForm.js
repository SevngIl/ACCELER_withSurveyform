import React, {useState} from 'react'
import QuestionForm from './QuestionForm';
import AddingOptions from './AddingOption';

function SurveyForm(props) {
  const [questions, setQuestions] = useState([]); //index, state(어떤 타입의 질문인지)
  
  // TODO : X 표시를 누르면 해당 문제의 정보가 삭제된다.
  function delQuestions (index){ 
    
    var result = questions.filter(function(value) {
      console.log("index: ", index, " value.id", value.id)
    return value.id !== index; // 값이 4가 아닌 요소만 선택
});
  console.log(result)
    setQuestions([...result])
  }
  // TODO : input 값에 따라 추가되는 문제의 형식이 다르다
  function addingQuestions(input){ 
    if(questions == null){
      questions.push({
        id:1,
        questiontype:input
      })
    }
    else{
      questions.push({
      id: questions.length+1, 
      questiontype: input,
    })
  }
    setQuestions([...questions])

  }
 
  return (
    <div>
      <div className='SurveyTitle'></div>
      <div className="surveyExplanation"></div>
      <AddingOptions addingQuestions={addingQuestions} ></AddingOptions> 
      <div>
      {questions.map((q, index)=>{return <QuestionForm questiontype={q.questiontype} delfunction={delQuestions} index={q.id}/>})}
      </div>

    </div>
    
  )
}

export default SurveyForm 
