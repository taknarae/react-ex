import './Editor.css';
import { useState, useRef } from 'react';

const Editor = ( {onCreate} ) => {

  const [content, setContent] = useState("");
  const contentRef = useRef();
  const onChangeContent = (e)=>{
    setContent(e.target.value);
  }
  const onKeyDown = (e)=>{ //엔터시 추가기능
    if(e.keyCode == 13) {
      onSubmit();
    }
  }

  const onSubmit = ()=>{
    if(content == "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent(""); //추가 후 필드 초기화
  }

  return (
    <div className="editor">
      <input type="text"
      value={content} onChange={onChangeContent}
      ref={contentRef} onKeyDown={onKeyDown}
      placeholder="새로운 Todo"/>
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor;