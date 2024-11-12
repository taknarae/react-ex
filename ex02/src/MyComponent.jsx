const MyComponent = ({ name="기본이름", children })=>{
  

  return (
    <>
      <div>
        안녕하세요. 제 이름은 {name}입니다.<br/>
        children 값은 {children}입니다.
      </div>
    </>
  )
}

export default MyComponent;