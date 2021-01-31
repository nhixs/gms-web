import React, { useEffect, useState } from 'react';
// import { useSelector } from "react-redux";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ChevronRight } from '@material-ui/icons/';

import LogoContainer from "./logoContainer";
import LogoKoperasi from "../../assets/logo.png";
import BellIcon from "../../assets/bell.svg";
import PasFoto from "../../assets/pasfoto.jpg";

import Columns from "../../helpers/column";
import Icon from "../../helpers/icons";
import colors from "../../helpers/colors";


const State = {}
const chevronState = { open: false, count: 0 }
const ColumnGroup = Columns.map(group => group['columns'].map(column => column.title));
const ColumnLabel = ColumnGroup.flat(1);
ColumnLabel.forEach(value => State[value] = { ...chevronState })

const role = 'supervisor'

const DrawerComponent = (props) => {
  const { children, title, subtitle = "", headerColor = "#003459" } = props
  // const officer = useSelector(state => state.officer)
  const [select, setSelection] = useState(State)
  const [selectedColumn, setColumn] = useState('')

  const handleSelect = (column = "") => {

    setColumn('')
    if (column && column !== "") {
      setSelection(option => {
        for (let key in option) {
          option[key].open = false
          option[key].count = 0
        }
        return option
      })
      setColumn(column)
      const getCount = select[column].count;
      const getOpen = select[column].open;
      setSelection(option => ({
        ...option, [column]: {
          open: !getOpen,
          count: getCount + 1
        }
      }));
    }
    else {
      let drawer = document.getElementById('mainDrawer');
      drawer.scrollTop = 0;
      setSelection(option => {
        for (let key in option) {
          option[key].open = false
          option[key].count = 0
        }
        return option
      })
    }
  }

  const ContentComponent = (props) => {
    const { value, index } = props
    return (
      <span id={"g" + index} key={value + index} style={{ display: 'contents' }} >
        <ContentTitle id={"contentTitle"} key={"ct" + index}>{value.title}</ContentTitle>
        {value['columns'].map((column, cId) =>
          <span id={"c" + cId} key={column.title + cId} style={{ display: 'contents' }}>
            <ContentGroup id="contentGroup" key={'cg' + cId} onClick={() => handleSelect(column.title)} >
              <ContentColumn id="contentColumn">
                <ContentLeft id="contentLeft" >
                  <ContentIcon id="contentIcon">
                    <Icon iconText={column.title} />
                  </ContentIcon>
                  <ContentLabel id="contentLabel">
                    {column.title.split("-").join(" ")}
                  </ContentLabel>
                </ContentLeft>
                <ContentChevron id="contentChevron" column={column.title} getColumn={select} isColumn={selectedColumn} >
                  <ChevronRight id={"chevron-" + column.title} />
                </ContentChevron>
              </ContentColumn>
            </ContentGroup>
            <SubContent id={"subContent-" + column.title} key={'sc' + cId}>
              {column['sub'].map((sub, sId) =>
                <SubContentLabel
                  id={"subContentLabel-" + column.title + sId}
                  key={"scl" + sub.label.split(" ").join("-") + sId}
                  to={sub.path}
                >
                  {sub.label}
                </SubContentLabel>
              )}
            </SubContent>
          </span>
        )}
      </span>
    )
  }

  useEffect(() => {
    document.title = title
  }, [title])

  return (
    // <Container>
    <>
      <Drawer contentOpen={select} id="drawerContainer" columnOpen={selectedColumn} onMouseLeave={() => handleSelect()}>
        <MainDrawer id="mainDrawer">
          <DrawerHeader>
            <LogoContainer image={LogoKoperasi} scale={'2.8rem'} space={'0.8rem 0'} />
            <KoperasiName id="koperasiName">Gapura Kayumanis</KoperasiName>
          </DrawerHeader>
          <DrawerContent id="drawerContent">

            {Columns.map((group, gId) => {
              switch (role) {
                case "operational":
                  if ([0, 1].includes(gId)) {
                    return <ContentComponent value={group} index={gId} />
                  } else return <></>;
                case "accountant":
                  if ([0, 2].includes(gId)) {
                    return <ContentComponent value={group} index={gId} />
                  } else return <></>;
                default:
                  return <ContentComponent value={group} index={gId} />
              }
            })}

          </DrawerContent>
        </MainDrawer>
        <DrawerFooter id="drawerFooter">
          <Footer id="footer">&copy; Gapura 2021</Footer>
        </DrawerFooter>
      </Drawer>
      <LowerLayer>
        <DrawerMask />
        <RightSide>
          <Header color={headerColor}>
            <Title>
              <MainTitle>{title}</MainTitle>
              {subtitle !== "" && <Subtitle>{subtitle}</Subtitle>}
            </Title>
            <UserSide>
              <Profile>
                <ProfileText>
                  <ProfileName>{"julius obed"}</ProfileName>
                  <ProfileRole>{role}</ProfileRole>
                </ProfileText>
                <ProfilePic>
                  <Picture scale={'3.2rem'} src={PasFoto} alt="userPicture" />
                </ProfilePic>
              </Profile>
              <NotifyBell>
                <Bell scale={'2.4rem'} src={BellIcon} alt="notifybell" />
              </NotifyBell>
            </UserSide>
          </Header>
          <Content>
            {children}
          </Content>
        </RightSide>
      </LowerLayer>
      {/* </Container> */}
    </>
  );
}

const Drawer = styled.div`
  ${_ => `width: calc(100vw - 94vw);`}
  display: flex;
  position: absolute;
  background-color: #ffffff;
  box-shadow: 2px 0px 3px 1px #f0f0f0;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  padding-top: 0.2rem;
  top:0;
  left:0;
  z-index:5;
  height:inherit;
  transition: all 0.2s ease;
  
  &:hover {
    ${_ => `width: calc(100vw - 80vw);`}
    & #mainDrawer {
      overflow-y: auto;
      overflow-x: hidden;
    }
    & #koperasiName {
      width:fit-content;
      height:fit-content; 
      opacity: 1;
      padding-bottom: 0.5em;
    }
    & #contentGroup{
      width: 100%;
      background-color: none;
      align-items:flex-start;
    }
    & #contentColumn{
      background-color: none;
      padding: .2rem 0;
      &:hover{
        background-color: rgba(240,240,240,0.6);
        color:initial;
        outline:none;
      }
    }
    & #contentLeft {
      padding-left: .2rem;
    }
    & #contentTitle {
      padding: 0 .2em;
      padding-bottom: .4rem;
      height: initial;
      width: fit-content;
      opacity: 1;
    }
    & #contentIcon{
      padding-right: 1rem;
      padding-left: 1rem;
    }
    & #contentLabel {
      height: initial;
      width: fit-content;
      padding-right: 3.2rem;
      opacity: 1;
    }
    & #contentChevron{
      height: initial;
      width:fit-content;
      opacity: 1;
      transition: all 20ms ease;
    }
    & #drawerFooter {
      opacity: 1;
      padding: .6rem 0;

    }
    & #footer {
      opacity: 1;
    }
    ${props => {
    const openColumn = props.contentOpen
    if (props.columnOpen && props.columnOpen !== "") {
      if (openColumn[props.columnOpen].open) {
        let style =
          `& #subContent-${props.columnOpen} { 
                height: fit-content; 
                width: 100%; 
                visibility: visible; 
                margin: 0;
              } 
            & a[id*="subContentLabel-${props.columnOpen}"]{ 
              color: ${colors.accent1};
              width: 100%;
              font-size: 1rem; 
              padding: .8rem 0;
              padding-left: 4.1rem; 
              visibility: visible; 
              &:hover{
                background-color: rgba(240,240,240,0.6);
                color: ${colors.accent1};
                outline:none;
                }
              }`
        return style
      } else {
        return ``
      }
    } else {
      return ``
    }
  }}
    border-top-right-radius: 12px;
  }
`

const MainDrawer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 .6rem;
  overflow: none;
  transition: padding .1s ease-in-out;
`

const DrawerHeader = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  align-items: center;
  overflow: hidden;
  border-bottom: 0.1em solid #003459;
`

const KoperasiName = styled.div`
  opacity: 0;
  padding-bottom: 0;
  height: .02em;
  width: .02em;
  font-size: .9em;
  transition: all 20ms ease-in;
`

const DrawerContent = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  overflow: auto;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  padding-top: .6rem;
  transition: all 10ms ease;
`

const ContentTitle = styled.div`
  display: flex;
  height: 0;
  width: 0;
  padding: 0 0;
  opacity: 0;
  font-size: 20px;
  text-transform: capitalize;
  align-self: flex-start;
  transition: all .1s ease;
`

const ContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: initial;
  border: none;
  padding: 0;
  color: initial;
  justify-content: center;
  align-items: center;
  background-color: none;
  overflow: hidden;
    &:focus{
    background-color: none;
    border: none;
    outline: none;
  }
  transition: all .1s ease;

`

const ContentColumn = styled.button`
  display: flex;
  flex-direction: row;
  background: none;
  width: 100%;
  padding: 0;
  border: none;
  color: initial;
  align-items: center;
  justify-content: space-between;
    &:focus{
    background: none;
    border: none;
    outline: none;
  }
`

const ContentLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const ContentIcon = styled.div`
  display: flex;
  padding: .6rem 0;
  align-items: center;
`

const ContentLabel = styled.div`
  display: flex;
  opacity: 0;
  height: 0;
  width: 0;
  opacity: 0;
  padding-right: 0;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  transition: all .4s ease;
`

const ContentChevron = styled.div`
  display: flex;
  opacity: 0;
  height: 0;
  width: 0;
  opacity: 0;
  align-items: center;
  justify-content: flex-start;
  ${props =>
    props.isColumn === "" && props.isColumn !== props.column ? `&${' div[id~=chevron]'}{transform: none}` :
      props.getColumn[props.column].open ? `& ${'#chevron-' + props.column}{transform: rotate(90deg)}` :
        props.getColumn[props.column].count % 2 !== 0 ? `& ${'#chevron-' + props.column}{transform: rotate(0deg)}` :
          `& ${'#chevron-' + props.column}{transform: none}`}
  transition: transform .2s ease;

`

const SubContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  visibility: hidden;
  transition: all .1s ease;
  padding: 0 0;
  height: 0;
  width: 0;
  cursor: pointer;
`

const SubContentLabel = styled(Link)`
  font-size: 0px;
  width: 0;
  visibility: hidden; 
  text-transform: capitalize;
  transition: all 10ms ease;
`

const DrawerFooter = styled.div`
  display: flex;
  height: fit-content;
  padding : 0;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const Footer = styled.div`
  opacity: 0;
  transition: all .1s ease-in;
`

const LowerLayer = styled.div`
  display: flex;
  height: inherit;
  width: inherit;
`

const DrawerMask = styled.div`
  ${props => `width: calc(100vw - 94vw);`}
  max-height: 100vh;
  background-color: #ffffff;
`

const RightSide = styled.div`
  ${props => `width: calc(100vw - 6vw);`}
  overflow: hidden;
  max-height: 100vh ;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:space-between;
  padding: 0 2rem;
  width: 100% ;
  
  ${props => `
    height: calc(100vh - 91vh);
    background: linear-gradient(90.37deg, ${props.color} 9.7%, ${colors.bg1} 70.83%);
  `}
`

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 2.8em;
`

const MainTitle = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  padding-right: .8rem;
  font-size: 1.8em;
  font-weight: bold;
  text-transform: capitalize;
  ${_ => `color: ${colors.white}`}
`

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  font-size: 1.8em;
  padding-left: .8rem;
  text-transform: capitalize;
  ${_ => `
    color: ${colors.white};
    border-left: 1px solid ${colors.white};
  `}
`

const UserSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  height: 85%;
`

const Profile = styled.div`
  display: flex;
  height:inherit;
  align-items:center;
`

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const ProfileName = styled.div`
  font-size: 18px;
  font-weight: bolder;
  text-transform: capitalize;
  vertical-align: middle;
`

const ProfileRole = styled.div`
  font-size: 12px;
  font-style: italic;
  text-transform: capitalize;
`

const ProfilePic = styled.div`
  display:flex;
  height: inherit;
  align-items: center;
  justify-content: center;
  padding: 0 1.4rem;
`

const Picture = styled.img`
  ${props => `
    height: ${props.scale};
    width: ${props.scale};
    border-radius: ${props.scale};
  `}
  box-shadow: 1px 1px 1px 1px #e2e2e2;
  object-fit: cover;

`

const NotifyBell = styled.div`
  display: flex;
  height: inherit;
  align-items: center;
  padding-left: 1.4rem;
  ${_ => `
    border-left: 1px solid ${colors.accent1};
  `}
`

const Bell = styled.img`
  ${props => `
    height: ${props.scale};
    width: ${props.scale};
  `}
`

const Content = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  padding: 2rem;
  justify-content: center;
  ${_ => `
    height: calc(100vh - 9vh);
    background-color: ${colors.bg1}; 
  `}
`

export default DrawerComponent;


/* <ContentTitle id="contentTitle">Management</ContentTitle>

<ContentGroup id="contentGroup" onClick={() => handleSelect("officer")} >
  <ContentColumn id="contentColumn">
    <ContentLeft id="contentLeft" >
      <ContentIcon id="contentIcon">
        <Icon iconText={'officer'} />
      </ContentIcon>
      <ContentLabel id="contentLabel">
        Officer
      </ContentLabel>
    </ContentLeft>
    <ContentChevron id="contentChevron" column={'officer'} getColumn={select} isColumn={selectedColumn} >
      <ChevronRight id="chevron-officer" />
    </ContentChevron>
  </ContentColumn>
  <SubContent id="subContent-officer">
    <SubContentLabel id="subContentLabel-officer1">List Officer</SubContentLabel>
    <SubContentLabel id="subContentLabel-officer2">Tambah Officer</SubContentLabel>
  </SubContent>
</ContentGroup>

<ContentGroup id="contentGroup" onClick={() => handleSelect("anggota")} >
  <ContentColumn id="contentColumn">
    <ContentLeft id="contentLeft" >
      <ContentIcon id="contentIcon">
        <Icon iconText={'anggota'} />
      </ContentIcon>
      <ContentLabel id="contentLabel">
        Anggota
    </ContentLabel>
    </ContentLeft>
    <ContentChevron id="contentChevron" column={'anggota'} getColumn={select} isColumn={selectedColumn}>
      <ChevronRight id="chevron-anggota" />
    </ContentChevron>
  </ContentColumn>
  <SubContent id="subContent-anggota">
    <SubContentLabel id="subContentLabel-anggota1">List Anggota</SubContentLabel>
    <SubContentLabel id="subContentLabel-anggota2">Tambah Anggota</SubContentLabel>
  </SubContent>
</ContentGroup>   */