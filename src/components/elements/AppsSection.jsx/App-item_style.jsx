import styled from 'styled-components'


export const StyledUl = styled.ul`
    padding:2%;
`

export const AppListItem = styled.li`
    width:100%;
    min-height: 120px;
    padding-bottom:10%;
    a { display: block;}
`

export const AppItemWrapper = styled.div `
    display: flex;flex-flow: row nowrap;       
    justify-content: space-between;
    align-items: center;

/*  background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-size: contain; */
`

export const AppLogoWrapper = styled.div`
    width:50%; text-align: left;
    img { max-width:100%; height:auto; max-height: 70px;}
`

export const AppLinksWrapper = styled.div `
    display: flex;flex-flow: row nowrap;

`
export const AppLink = styled.div`
    height: 4em;
    width: 4em;

    border: 1px solid grey;border-radius: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
`