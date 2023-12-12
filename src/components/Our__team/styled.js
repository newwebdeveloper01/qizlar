import styled from "styled-components";

export const Container = styled.div `

    text-align: center;
    margin-top:400px;
    
    
    
    & > div{
        display: flex;
        gap:20px;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 100px;
    }

`

export const Our__Card = styled.div `
    position: relative;
    width: 300px;
    height: 300px;
    border-radius:20px;
    

            
    text-align: center;
    & > div{
            position:absolute;
            bottom: 0;
            width:300px;
            height:25px;
            opacity: 1;
            z-index:14;
            background-color: #fff;
    transition:  0.3s ease-in-out;
    & > p{
        display:none;
    }

        }
    & > img{
        margin: auto auto;
        width: 300px;
        height: 300px;
        border-radius:20px;
    }
    
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    transition: box-shadow 0.3s ease-in-out;

        & > div{
            position:absolute;
            bottom: 0;
            width:300px;
            height:100px;
            opacity: 1;
            z-index:14;
            border-radius:20px;

            background-color: #fff;
            transition:  0.3s ease-in-out;
    & > p{
        display:block;
    }
        }
        & > img{
        width: 100%;
        height: 90%;
    transition: 0.5s ease-in-out;
    border-radius:20px;


        z-index:1;
        }
        
    }

`
