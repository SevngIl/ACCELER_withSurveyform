import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import Button from "../ui/Button"

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;
const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.div`
    
`;

const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;



function QuestionForm(props) {
    const [quesTitle, setQuesTitle] = useState("");
    const [essential, setEssential] = useState(false);
    const [del, setDel] = useState(false);
    const navigate = useNavigate();

     const handleChange = (e) => {
    // 입력값이 변경될 때 실행할 함수
    setQuesTitle(e.target.value); // 상태 업데이트
  };

return (
        <Wrapper>
            <Container>
                <Button
                    title="뒤로 가기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
                <PostContainer>
                    <div>
                        <div style={{border: "" ,float: "left", width: "70%"}}><input type="text" value={quesTitle} onChange={handleChange} /> <p>입력값: {quesTitle}</p></div>
                        <div style={{border: "" ,float: "left", width: "15%"}}> <input type="checkbox" name="essential" value="필수"/>필수</div>
                        <div style={{border: "", float: "left", width: "5%"}}><input type="button" name="delbtn" value="X"/></div>
                    </div>
                    <ContentText>

                    </ContentText>
                </PostContainer> 
                



                {/* <CommentLabel>댓글</CommentLabel>
                <CommentList comments={post.comments} />

                <TextInput
                    height={40}
                    value={comment}
                    onChange={(event) => {
                        setComment(event.target.value);
                    }}
                />
                <Button
                    title="댓글 작성하기"
                    onClick={() => {
                        navigate("/");
                    }}
                /> */}
            </Container>
        </Wrapper>
  )
}

export default QuestionForm