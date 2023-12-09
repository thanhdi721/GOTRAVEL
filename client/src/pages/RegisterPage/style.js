import styled from "styled-components";

export const WrapperBackground = styled.div`
  width: 100%;
  height: 100vh;

  background-position: center;
  background-size: cover;
  filter: blur(5px);
`;
export const WrapperSection = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 75%;
  height: 75%;
  transform: translate(-50%, -50%);

  background-position: center;
  background-size: cover;
  display: flex;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 10px;
  border: none;
  box-shadow: 5px 10px 10px 0;
`;
export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  padding: 100px 0;
  @media (max-width: 767px) {
    display: none;
  }
`;
export const WrapperContentA = styled.div`
  position: relative;
  text-decoration: none;
  color: #fff;
  font-size: 3em;
  font-weight: 700;
  top: -40px;
  left: 80px;
`;
export const WrapperContentH2 = styled.h2`
  font-size: 3.5em;
  text-align: center;
  color: #fff;
  letter-spacing: 10px;
`;
export const WrapperContentH3 = styled.h3`
  font-size: 2em;
  text-align: center;
  color: #fff;
`;
export const WrapperContentPre = styled.pre`
  margin-top: 20px;
  text-align: center;
  font-size: 1em;
  color: #fff;
`;
export const WrapperIcon = styled.div`
  margin-top: 20px;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
`;
export const WrapperIconI = styled.i`
  margin-left: 20px;
  color: #fff;
`;
export const WrapperLogin = styled.div`
  width: 450px;
  position: relative;
  padding: 100px 30px;
  backdrop-filter: blur(10px);
`;
export const WrapperLoginH2 = styled.h2`
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
`;
export const WrapperLoginInput = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  margin-bottom: 40px;
`;
export const WrapperLoginInput1 = styled.input`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid #fff;
  color: #fff !important;
  width: 100%;
  height: 100%;
  ::placeholder {
    color: #fff !important;
  }
`;
export const WrapperLoginInputI = styled.i`
  position: relative;
  right: -370px;
  bottom: 27px;
  color: #fff;
`;
export const WrapperCheck = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  color: #fff;
`;
export const WrapperCheckA = styled.div`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  ::hover {
    text-decoration: underline;
  }
`;
export const WrapperButton = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
`;
export const WrapperBtn = styled.button`
  width: 100%;
  height: 40px;
  background-color: rgb(29, 160, 66);
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 700;
  border-radius: 7px;
  color: #fff;
  ::active {
    font-size: 25px;
  }
`;
export const WrapperSignUp = styled.div`
  display: flex;
  justify-content: center;
`;
export const WrapperSignUpA = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  ::hover {
    text-decoration: underline;
  }
`;
export const WrapperSignUpP = styled.p`
  color: #fff;
`;
