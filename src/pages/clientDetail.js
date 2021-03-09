import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import Drawer from "./components/drawer";
import pasPhoto from '../assets/photo_close_up.jpg';

import { Visibility, VisibilityOff } from '@material-ui/icons';

const ClientDetail = (props) => {

    /*Function for Form Tab */
    const [active, setActive] = useState(0);
    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
            setActive(index);
        }
    };

    // const [hasError, setErrors] = useState(false);
    // const [data, setData] = useState({});
    // async function fetchData() {
    //     try {
    //         const res = await Axios.get(
    //             'http://192.168.1.16:6464/client/profile/000000005',
    //         );
    //         const { success, message, data } = res.data;
    //         setData(res.data);
    //     } catch (error) {
    //         setErrors(error.ressponse.data);
    //         alert(hasError.toString());
    //     }
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

    /* Function for show and hide field */
    const [showPassword, setPassword] = useState(false);
    const [showPhone, setPhone] = useState(false);
    const [showPin, setPin] = useState(false);


    /* Function for Styling Input File */
    // Create a reference to the hidden file input element
    const hiddenFileInput = React.useRef(null);

    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClickFile = event => {
        hiddenFileInput.current.click();
    };
    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file 
    const handleChangeFile = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let newDate = new Date()
    let month = months[newDate.getMonth() - 1];
    let year = newDate.getFullYear();
    return (
        <Drawer title={'Anggota'} subtitle={'Detail Anggota'}>
            <Content>
                <Container2>
                    <HeadContent>
                        <PhotoContainer src={pasPhoto} />
                        <VerticalLine />
                        <ClientData>
                            <ClientName>Julius Obed</ClientName>
                            <ClientId>0000012</ClientId>
                        </ClientData>
                    </HeadContent>
                    <BodyContent>
                        <DepositSection>
                            <Label>Tabungan</Label>
                            <Line />
                            <Data>
                                <LabelData>SimpananKu</LabelData>
                                <LabelData>Rp. 3.000.000</LabelData>
                            </Data>
                            <Data>
                                <MandatorySavings>
                                    <LabelData style={{ margin: "0" }}>Simpanan Wajib</LabelData>
                                    <LabelStatus>{month} {year} Sudah Terbayarkan</LabelStatus>
                                </MandatorySavings>
                                <LabelData>Rp. 50.000</LabelData>
                            </Data>
                            <Data>
                                <LabelData>Simpanan Pokok</LabelData>
                                <LabelData>Rp. 25.000</LabelData>
                            </Data>
                        </DepositSection>
                        <DepositSection>
                            <Label>Daftar Simpanan</Label>
                            <Line />
                            <Data>
                                <LabelData>Simpanan Berkala</LabelData>
                                <LabelData>Rp. 5.725.000</LabelData>
                            </Data>
                            <AddDeposit>
                                <StyledLink style={{ textDecoration: "none" }} to="/deposit/apply">Buka Simpanan Baru</StyledLink>
                            </AddDeposit>
                        </DepositSection>
                        <LoanSection>
                            <Label>Daftar Pinjaman</Label>
                            <Line />
                            <Data>
                                <LabelData>Simpanan Berkala</LabelData>
                                <LabelData>Rp. 5.725.000</LabelData>
                            </Data>
                            <AddLoan>
                                <StyledLink style={{ textDecoration: "none" }} to="/loan/apply">Ajukan Pinjaman Baru</StyledLink>
                            </AddLoan>
                        </LoanSection>
                    </BodyContent>
                </Container2>
                <Container1>

                    <Tabs>
                        <TabButton onClick={handleClick} active={active === 0} id={0}>
                            Personal Data
                        </TabButton>

                        <TabButton onClick={handleClick} active={active === 1} id={1}>
                            Dokumen
                        </TabButton>
                        <TabButton onClick={handleClick} active={active === 2} id={2}>
                            Akun
                        </TabButton>
                    </Tabs>
                    <Line />
                    <>
                        <ContentTab active={active === 0}> {/*Personal Data Tab Section */}
                            <Data>
                                <Label>Nama</Label>
                                <Input />
                            </Data>
                            <Data>
                                <LabelSub style={{ margin: "0" }}>Tanggal Lahir</LabelSub>
                                <Input type="date" style={{ width: "fit-content" }} />
                                <LabelSub>Tempat Lahir</LabelSub>
                                <Input style={{ width: "fit-content" }} />
                            </Data>
                            <Data>
                                <Label>Gender</Label>
                                <Input list="gender" style={{ width: "fit-content", marginLeft: "1.4em" }} />
                                <Datalist id="gender">
                                    <Option value="Laki-laki" />
                                    <Option value="Perempuan" />
                                </Datalist>
                                <LabelSub>Status Nikah</LabelSub>
                                <Input list="marital_status" style={{ width: "fit-content" }} />
                                <Datalist id="marital_status">
                                    <Option value="Menikah" />
                                    <Option value="Belum Menikah" />
                                </Datalist>
                            </Data>
                            <Data>
                                <Label>Alamat</Label>
                                <Textarea />
                            </Data>
                            <Data>
                                <div></div>
                                <Data style={{ flexDirection: "column", margin: "0" }}>
                                    <Data style={{ margin: "0" }}>
                                        <Data style={{ margin: "0", paddingLeft: ".75em" }} >
                                            <LabelSub>Provinsi</LabelSub>
                                            <InputAlamat />
                                        </Data>
                                        <Data style={{ margin: "0" }}>
                                            <LabelSub>Kecamatan</LabelSub>
                                            <InputAlamat />
                                        </Data>
                                    </Data>
                                    <Data style={{ margin: "0" }}>
                                        <Data style={{ margin: ".2em 2em .2em 0em" }}>
                                            <LabelSub>Kota/Kab.</LabelSub>
                                            <InputAlamat />
                                        </Data>
                                        <Data style={{ margin: ".2em 0em" }}>
                                            <LabelSub>Kelurahan</LabelSub>
                                            <InputAlamat style={{ marginLeft: ".2em" }} />
                                        </Data>
                                    </Data>
                                </Data>
                            </Data>
                            <Data>
                                <Label>Pendidikan</Label>
                                <Input style={{ width: "13em" }} />
                                <Label>Profesi</Label>
                                <Input style={{ width: "13em" }} />
                            </Data>
                            <Data>
                                <div></div>
                                <UpdateButton>Update</UpdateButton>
                                <div></div>
                            </Data>
                        </ContentTab>
                        <ContentTab active={active === 1} > {/*Document Tab Section */}
                            <Data>
                                <Label>No. KTP</Label>
                                <Input type="number" />
                            </Data>
                            <Data >
                                <Label>Foto KTP</Label>
                                <Data style={{ paddingRight: "8.5em" }}>
                                    <ButtonPreview onClick={handleClickFile}>
                                        Preview
                                    </ButtonPreview>
                                    <input
                                        type="file"
                                        ref={hiddenFileInput}
                                        onChange={handleChangeFile}
                                        style={{ display: 'none' }}
                                    />
                                    <ButtonBrowse onClick={handleClickFile}>
                                        Browse...
                                    </ButtonBrowse>
                                    <input
                                        type="file"
                                        ref={hiddenFileInput}
                                        onChange={handleChangeFile}
                                        style={{ display: 'none' }}
                                    />
                                </Data>

                            </Data>
                            <Data>
                                <Label>No. NPWP</Label>
                                <Input type="number" />
                            </Data>
                            <Data >
                                <Label>Foto NPWP</Label>
                                <Data style={{ paddingRight: "8.5em" }}>
                                    <ButtonPreview onClick={handleClickFile}>
                                        Preview
                                    </ButtonPreview>
                                    <input
                                        type="file"
                                        ref={hiddenFileInput}
                                        onChange={handleChangeFile}
                                        style={{ display: 'none' }}
                                    />
                                    <ButtonBrowse onClick={handleClickFile}>
                                        Browse...
                                    </ButtonBrowse>
                                    <input
                                        type="file"
                                        ref={hiddenFileInput}
                                        onChange={handleChangeFile}
                                        style={{ display: 'none' }}
                                    />
                                </Data>

                            </Data>
                            <Data>
                                <Label>No. Rekening</Label>
                                <Input type="number" />
                            </Data>
                            <Data >
                                <Label>Foto Rekening</Label>
                                <Data style={{ paddingRight: "8.5em" }}>
                                    <ButtonPreview onClick={handleClickFile}>
                                        Preview
                                    </ButtonPreview>
                                    <input
                                        type="file"
                                        ref={hiddenFileInput}
                                        onChange={handleChangeFile}
                                        style={{ display: 'none' }}
                                    />
                                    <ButtonBrowse onClick={handleClickFile}>
                                        Browse...
                                    </ButtonBrowse>
                                    <input
                                        type="file"
                                        ref={hiddenFileInput}
                                        onChange={handleChangeFile}
                                        style={{ display: 'none' }}
                                    />
                                </Data>

                            </Data>
                            <Data>
                                <div></div>
                                <UpdateButton>Update</UpdateButton>
                                <div></div>
                            </Data>
                        </ContentTab>
                        <ContentTab active={active === 2}> {/*Akun Tab Section */}
                            <Data>
                                <Label>Email</Label>
                                <Input />
                            </Data>
                            <Data>
                                <Label>Password</Label>
                                <HideBox>
                                    <Input type={showPassword ? 'text' : 'password'} style={{ outline: "none", border: "none", width: "350px", height: "30px" }} />
                                    {showPassword ? <Visibility onClick={() => setPassword(!showPassword)} /> : <VisibilityOff onClick={() => setPassword(!showPassword)} />}
                                </HideBox>
                            </Data>
                            <Data>
                                <Label>No. Telpon</Label>
                                <HideBox>
                                    <Input type={showPhone ? 'text' : 'password'} style={{ outline: "none", border: "none", width: "350px", height: "30px" }} />
                                    {showPhone ? <Visibility onClick={() => setPhone(!showPhone)} /> : <VisibilityOff onClick={() => setPhone(!showPhone)} />}
                                </HideBox>
                            </Data>

                            <Data>
                                <Label>PIN</Label>
                                <HideBox>
                                    <Input type={showPin ? 'text' : 'password'} style={{ outline: "none", border: "none", width: "350px", height: "30px" }} />
                                    {showPin ? <Visibility onClick={() => setPin(!showPin)} /> : <VisibilityOff onClick={() => setPin(!showPin)} />}
                                </HideBox>
                            </Data>
                            <Data>
                                <Label>Emergecy Email</Label>
                                <Input />
                            </Data>
                            <Data>
                                <div></div>
                                <UpdateButton>Update</UpdateButton>
                                <div></div>
                            </Data>

                        </ContentTab>
                    </>
                </Container1>
            </Content>

        </Drawer>
    )
}

export default ClientDetail;


const Container1 = styled.div`
width: fit-content;
height: fit-content;

padding: 2em;
background: #FFFFFF;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
border-radius: 24px 24px 24px 24px;
justify-content: center;
margin-left: 5em;
`
const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  font-family: Open Sans;

  height: fit-content;
`
const ContentTab = styled.div`
height: fit-content;
  flex-direction: column;
  ${props => (props.active ? "display:flex" : "display:none")}
`
const Data = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

margin: .75em 0em;
`
const TabButton = styled.button`
width: 115px;
height: 32px;

background-color: ${props => (props.active ? "#003459" : "#ffffff")};
color: ${props => (props.active ? "#ffffff" : "#003459")};
font-family: Franklin Gothic Medium;
border-radius: 10px;
outline: none;
border: none;
`
const Line = styled.div`
border: .5px solid #003459;

margin: 1em 0em 1em 0em;
`
const Label = styled.label`

`
const Input = styled.input`
background: #E1ECF4;
border: 1px solid #003459;
box-sizing: border-box;
border-radius: 10px;
outline: none;

padding-left: .5em;
width: 400px;
height: 35px;

::-webkit-inner-spin-button{
                    -webkit - appearance: none;
    margin: 0;
}
::-webkit-outer-spin-button{
                    -webkit - appearance: none;
    margin: 0;
}

`
const UpdateButton = styled.button`
background: #FFCB37;
border-radius: 100px;
border: none;
font-size: 20px;

margin: 1em 0em;
width: 8em;
`

const HideBox = styled.div`
background: #E1ECF4;
border: 1px solid #003459;
box-sizing: border-box;
border-radius: 10px;
outline: none;


width: 400px;
height: 35px;
`

const ButtonBrowse = styled.button`
background: #C4C4C4;
border: none;
box-sizing: border-box;
border-radius: 10px;

width: 8em;
`
const ButtonPreview = styled.button`
background: #FFCB37;
border: none;
box-sizing: border-box;
border-radius: 10px;

margin: 0em .5em;
width: 8em;
`
const Datalist = styled.datalist`

`
const Option = styled.option`
`

const Textarea = styled.textarea`
background: #E1ECF4;
border: 1px solid #003459;
box-sizing: border-box;
border-radius: 10px;
outline: none;

width: 400px;
padding-left: .5em;
height: 6.5em;
`

const LabelSub = styled.label`
font-size: 12px;
margin: 0em .5em 0em 0em;
`

const InputAlamat = styled.input`
background: #E1ECF4;
border: 1px solid #003459;
box-sizing: border-box;
border-radius: 10px;
outline: none;
text-align: center;

height: 35px;
width: 8em;
`

const Content = styled.div`
display: flex;
flex-direction: row;
`
const Container2 = styled.div`
width: fit-content;
height: fit-content;

padding: 2em;
background: #FFFFFF;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
border-radius: 24px 24px 24px 24px;
justify-content: center;
`

const HeadContent = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const PhotoContainer = styled.img`
border-radius: 50%;

width: 65px;
height: 65px;
`

const VerticalLine = styled.div`
border: .5px solid #003459;
transform: rotate(180deg);
`

const ClientData = styled.div`
display: flex;
flex-direction: column;
`

const ClientName = styled.label`
font-size: 25px;
`

const ClientId = styled.label`
font-size: 15px;
`

const BodyContent = styled.div`

`

const DepositSection = styled.div`

`

const LabelData = styled.label`
font-family: Franklin Gothic Book;
`

const LabelStatus = styled.label`
font-family: Franklin Gothic Book;
font-size: 10px;
font-style: italic;
text-decoration: underline;
color: #39B54A;
`

const MandatorySavings = styled.div`
display: flex;
flex-direction: column;
`

const LoanSection = styled.div`

`

const AddDeposit = styled.div`
text-align: center;
border: 2px dashed #C4C4C4;
box-sizing: border-box;
border-radius: 10px;

margin: 0em 0em 2em 0em;
`

const StyledLink = styled(Link)`
font-family: Franklin Gothic Book;
font-size: 25px;
color: #787878;

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: #787878;
}
`
const AddLoan = styled.div`
text-align: center;
border: 2px dashed #C4C4C4;
box-sizing: border-box;
border-radius: 10px;

margin: 0em 0em 2em 0em;
`