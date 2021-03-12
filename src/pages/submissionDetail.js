import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Accordion, AccordionToggle } from "react-bootstrap";
import Swal from 'sweetalert2';

import Drawer from "./components/drawer";
import pasPhoto from '../assets/photo_close_up.jpg';
import CheckDeactive from '../assets/check_deactive.svg';
import CheckActive from '../assets/check_active.svg';


const SubmissionDetail = (props) => {

    const [active, setActive] = useState(0);
    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
            setActive(index);
        }
    };

    /* Function for checked action */
    const check = { CheckActive, CheckDeactive };
    const [checked, setChecked] = useState(check.CheckDeactive);

    const checkProcess = { CheckActive, CheckDeactive };
    const [checkedProcess, setCheckedProcess] = useState(checkProcess.CheckDeactive);

    const checkFinal = { CheckActive, CheckDeactive };
    const [checkedFinal, setCheckedFinal] = useState(checkFinal.CheckDeactive);


    return (
        <Drawer title={'Pengajuan'} subtitle={'Detail Pengajuan'}>
            <Container1>
                <div className="App">

                    <Tabs>
                        <TabButton onClick={handleClick} active={active === 0} id={0}>
                            Pegajuan
                        </TabButton>

                        <TabButton onClick={handleClick} active={active === 1} id={1}>
                            Dokumen
                        </TabButton>
                        <TabButton onClick={handleClick} active={active === 2} id={2}>
                            Personal Data
                        </TabButton>
                    </Tabs>
                    <Line />
                    <>
                        <Content active={active === 0}>
                            <HeadContent>
                                APP-0000001101
                                <div></div>
                            </HeadContent>
                            <BodyContent>
                                <LeftSide>
                                    <Label1>Nama</Label1>
                                    <Label1>No. Telepon</Label1>
                                    <Label1>Email</Label1>
                                    <Label1>Produk</Label1>



                                </LeftSide>
                                <MidSide>
                                    <Label2>Julius Obed Wahyu Jati</Label2>
                                    <Label2>085716576999</Label2>
                                    <Label2>juliusobed@gmail.com</Label2>
                                    <Label2>Pinjaman Anggunan</Label2>

                                </MidSide>
                                <RightSide>

                                </RightSide>
                            </BodyContent>
                            <Line></Line>
                            <BodyContent>
                                <LeftSide>

                                    <Label1>Nominal</Label1>
                                    <Label1>Tenor</Label1>
                                    <Label1>Tujuan Peminjaman</Label1>


                                </LeftSide>
                                <MidSide>

                                    <Label2 style={{ fontSize: "23px" }}>Rp. 10.000.000</Label2>
                                    <Label2>12 Bulan</Label2>
                                    <Label2 style={{ width: "12em" }}>Untuk membayar uang masuk kuliah 2021 di UMN</Label2>

                                </MidSide>
                                <RightSide>

                                </RightSide>
                            </BodyContent>
                        </Content>
                        <Content active={active === 1}>
                            <HeadContent>
                                APP-0000001101
                                <div></div>
                            </HeadContent>
                            <BodyContent>
                                <LeftSide>
                                    <Label1>No. KTP</Label1>
                                    <Label1>No. NPWP</Label1>
                                    <Label1>Foto NPWP</Label1>
                                    <Label1>Foto KTP</Label1>
                                    <Label1 style={{ width: "6.1em" }}>Tanda Tangan</Label1>
                                </LeftSide>
                                <MidSide>
                                    <Label2>3242075826242345</Label2>
                                    <Label2>967118597001000</Label2>
                                    <PreviewButton>Preview</PreviewButton>
                                    <PreviewButton>Preview</PreviewButton>
                                    <PreviewButton>Preview</PreviewButton>
                                </MidSide>
                                <RightSide>

                                </RightSide>
                            </BodyContent>
                        </Content>
                        <Content active={active === 2}>
                            <HeadContent style={{ fontSize: "20px" }}>
                                <HeadLeft>
                                    <PhotoContainer src={pasPhoto} />
                                </HeadLeft>
                                <Line style={{ height: "100px", margin: "0em" }} />
                                <HeadMid>
                                    <LabelName>Julius Obed</LabelName>
                                    <Label>000001121</Label>
                                </HeadMid>
                                <HeadRight>APP-0000001101</HeadRight>
                            </HeadContent>
                            <BodyContent style={{ flexDirection: "column" }}>
                                <LabelName>Data Diri</LabelName>
                                <Table>
                                    <TableRow>
                                        <TableData>Nama</TableData>
                                        <TableData>Julius Obed Wahyu Jati</TableData>

                                    </TableRow>
                                    <TableRow>
                                        <TableData>Tanggal Lahir</TableData>
                                        <TableData>16/07/1998</TableData>
                                    </TableRow>
                                    <TableRow>
                                        <TableData>Gender</TableData>
                                        <TableData>Perempuan</TableData>
                                    </TableRow>
                                    <TableRow>
                                        <TableData>Tempat Lahir</TableData>
                                        <TableData>Ambarawa</TableData>
                                    </TableRow>
                                    <TableRow>
                                        <TableData>Status Nikah</TableData>
                                        <TableData>Belum Menikah</TableData>
                                    </TableRow>
                                    <TableRow>
                                        <TableData>Pendidikan</TableData>
                                        <TableData>S1</TableData>
                                    </TableRow>
                                    <TableRow>
                                        <TableData>Profesi</TableData>
                                        <TableData>Pegawai Swasta</TableData>
                                    </TableRow>
                                    <TableRow>
                                        <TableData>Alamat</TableData>
                                        <TableData>Jalan Kayumanis 8 No. 18 Rt.17 Rw.08, Matraman Jakarta Timur</TableData>
                                    </TableRow>
                                </Table>
                                <AddressDetail>
                                    <AddressGroup>
                                        <div></div>
                                        <div></div>
                                        <AddressGroup>
                                            <LabelAddress style={{ marginRight: "3em" }}>provinsi</LabelAddress>
                                            <LabelAddressVal style={{ marginRight: "3em" }}>DKI Jakarta</LabelAddressVal>
                                            <LabelAddress>Kecamatan</LabelAddress>
                                            <LabelAddressVal>Matraman</LabelAddressVal>
                                        </AddressGroup>
                                    </AddressGroup>
                                    <AddressGroup>
                                        <div></div>
                                        <div></div>
                                        <AddressGroup>
                                            <LabelAddress>Kota/Kab.</LabelAddress>
                                            <LabelAddressVal style={{ marginRight: "3em" }}>Jakarta Timur</LabelAddressVal>
                                            <LabelAddress>Kelurahan</LabelAddress>
                                            <LabelAddressVal>Kayumanis</LabelAddressVal>
                                        </AddressGroup>
                                    </AddressGroup>
                                </AddressDetail>
                                <Table>
                                    <TableRow>
                                        <TableData>Penghasilan</TableData>
                                        <TableData>Rp. 1.000.000/bulan</TableData>
                                    </TableRow>
                                    <TableRow>
                                        <TableData>Jumlah Tanggungan</TableData>
                                        <TableData>5</TableData>
                                        <TableData>Jumlah Anak</TableData>
                                        <TableData>2</TableData>
                                    </TableRow>
                                </Table>
                                <LabelName>Data Pasangan</LabelName>
                                <Table>
                                    <TableRow>
                                        <TableData>Nama Pasangan</TableData>
                                        <TableData></TableData>
                                    </TableRow>

                                    <TableRow>
                                        <TableData>Pekerjaan</TableData>
                                        <TableData></TableData>
                                    </TableRow>

                                    <TableRow>
                                        <TableData>Penghasilan</TableData>
                                        <TableData></TableData>
                                    </TableRow>
                                    <TableRow>
                                        <TableData>Tinggal Serumah</TableData>
                                        <TableData></TableData>
                                    </TableRow>
                                </Table>
                            </BodyContent>
                        </Content>
                    </>

                </div>


            </Container1>
            <Container2>
                <LabelName>Status Pengajuan</LabelName>
                <Line></Line>
                <BodyContentSub>

                    <FormGroup>
                        <img src={CheckActive} style={{ width: "35px", marginRight: ".5em" }} />
                        <LabelSub>Diajukan</LabelSub>
                    </FormGroup>
                    <FormGroup>
                        <LabelDate>4 Februari 2020 , 14:12:34</LabelDate>
                    </FormGroup>
                    <FormGroup>
                        <img src={checkedProcess} style={{ width: "35px", marginRight: ".5em" }} />
                        <LabelSub>Diproses</LabelSub>
                    </FormGroup>
                    <CollapseContent>
                        <Paragraph>
                            Tahap pengecekan kelengkapan data dan dokumen anggota
                                </Paragraph>
                        <SubmitButton type="submit" value="Action"
                            onClick={() => Swal.fire({
                                html: '<div>'
                                    + '<div style="font-family: Franklin Gothic Medium; font-style: normal; font-weight: normal; font-size: 25px; color: #003459; margin-right: 300px;">'
                                    + 'Diproses'
                                    + '</div>'
                                    + '<div style="border: .5px solid #003459;">'
                                    + '</div>'
                                    + '<div style="font-family: Franklin Gothic Medium;font-style: normal;font-weight: normal;font-size: 15px;color: #003459; margin-right: 265px;">'
                                    + 'Telah Direview Oleh'
                                    + '</div>'
                                    + '<div style="font-family: Franklin Gothic Medium;font-style: normal;font-weight: normal;font-size: 25px;color: #003459; margin: 10px 0px 5px 0px;">'
                                    + 'Julius Obed Wahyu Jati'
                                    + '</div>'
                                    + '<div style="font-family: Franklin Gothic Medium;font-style: normal;font-weight: normal;font-size: 15px;color: #003459;">'
                                    + '0014-Officer'
                                    + '</div>'
                                    + '</div>',
                                inputPlaceholder: 'Data pengajuan anggota sudah memenuhi persyaratan',
                                input: 'checkbox',
                                confirmButtonText: 'Prosses',
                                confirmButtonColor: ' #FFCB37'
                            }).then(function (result) {
                                if (result.value) {
                                    Swal.fire({
                                        text: 'Alasan Tidak Memenuhi Syarat',
                                        html: '<div>'
                                            + '<div style="font-family: Franklin Gothic Medium; font-style: normal; font-weight: normal; font-size: 25px; color: #003459; margin-right: 300px;">'
                                            + 'Diproses'
                                            + '</div>'
                                            + '<div style="border: .5px solid #003459;">'
                                            + '</div>'
                                            + '<div style="font-family: Franklin Gothic Medium;font-style: normal;font-weight: normal;font-size: 15px;color: #003459; margin-right: 265px;">'
                                            + 'Telah Direview Oleh'
                                            + '</div>'
                                            + '<div style="font-family: Franklin Gothic Medium;font-style: normal;font-weight: normal;font-size: 25px;color: #003459; margin: 10px 0px 5px 0px;">'
                                            + 'Julius Obed Wahyu Jati'
                                            + '</div>'
                                            + '<div style="font-family: Franklin Gothic Medium;font-style: normal;font-weight: normal;font-size: 15px;color: #003459;">'
                                            + '0014-Officer'
                                            + '</div>'
                                            + '<div style="font-family: Franklin Gothic Medium;font-style: normal;font-weight: normal;font-size: 15px;color: #003459; margin:30px 200px 0px 0px;">'
                                            + 'Alasan Tidak Memenuhi Syarat:'
                                            + '</div>'
                                            + '<textarea style="border: 1px solid #003459;box-sizing: border-box; width: 22.5em; height: 5em;"></textarea>'
                                            + '</div>',
                                        inputPlaceholder: 'Data pengajuan anggota sudah memenuhi persyaratan',
                                        input: 'checkbox',
                                        showCancelButton: true,
                                        cancelButtonColor: '#FF4F37',
                                        cancelButtonText: 'Tolak',
                                        confirmButtonColor: '#B3B3B3',
                                        confirmButtonText: 'Prosses'
                                    }).then(function (result) {
                                        if (result.value) {
                                            setCheckedProcess(checkProcess.CheckActive)
                                            Swal.fire({
                                                icon: 'success',
                                                title: 'Pengajuan Diprosess!',
                                                showConfirmButton: false
                                            })
                                        } else if (result.dismiss === Swal.DismissReason.cancel) {
                                            Swal.fire({ icon: 'error', text: "Pengajuan ditolak", showConfirmButton: false });

                                        } else {
                                            console.log(`modal was dismissed by ${result.dismiss}`)
                                        }
                                    })

                                } else if (result.value === 0) {
                                    Swal.fire({ icon: 'error', text: "Check data kembali", showConfirmButton: false });

                                } else {
                                    console.log(`modal was dismissed by ${result.dismiss}`)
                                }
                            })} />
                    </CollapseContent>

                    <FormGroup>
                        <img src={checked} style={{ width: "35px", marginRight: ".5em" }} />
                        <AccordionToggle as={AcorTog} eventKey="1">
                            <LabelSub>Ditindaklanjuti</LabelSub>
                        </AccordionToggle>
                    </FormGroup>
                    <CollapseContent>
                        <Paragraph>
                            Tahap untuk penentuan tanggal survey
                                </Paragraph>
                        <SubmitButton type="submit" value="Action"
                            onClick={() => Swal.fire({
                                html: '<div>'
                                    + '<div style="font-family: Franklin Gothic Medium; font-style: normal; font-weight: normal; font-size: 25px; color: #003459; margin-right: 300px;">'
                                    + 'Diproses'
                                    + '</div>'
                                    + '<div style="border: .5px solid #003459;">'
                                    + '</div>'
                                    + '<div style="font-family: Franklin Gothic Medium;font-style: normal;font-weight: normal;font-size: 15px;color: #003459; margin-right: 265px;">'
                                    + 'Telah Direview Oleh'
                                    + '</div>'
                                    + '<div style="font-family: Franklin Gothic Medium;font-style: normal;font-weight: normal;font-size: 25px;color: #003459; margin: 10px 0px 5px 0px;">'
                                    + 'Julius Obed Wahyu Jati'
                                    + '</div>'
                                    + '<div style="font-family: Franklin Gothic Medium;font-style: normal;font-weight: normal;font-size: 15px;color: #003459;">'
                                    + '0014-Officer'
                                    + '</div>'
                                    + '</div>',
                                inputPlaceholder: 'Data pengajuan anggota sudah memenuhi persyaratan',
                                input: 'checkbox',
                                confirmButtonText: 'Prosses',
                                confirmButtonColor: ' #FFCB37'
                            }).then(function (result) {
                                if (result.value) {
                                    Swal.fire({
                                        text: 'Alasan Tidak Memenuhi Syarat',
                                        html: '<div>'
                                            + '<div style="font-family: Franklin Gothic Medium; font-style: normal; font-weight: normal; font-size: 25px; color: #003459; margin-right: 300px;">'
                                            + 'Diproses'
                                            + '</div>'
                                            + '<div style="border: .5px solid #003459;">'
                                            + '</div>'
                                            + '<div style="font-family: Franklin Gothic Medium;font-style: normal;font-weight: normal;font-size: 15px;color: #003459; margin-right: 265px;">'
                                            + 'Telah Direview Oleh'
                                            + '</div>'
                                            + '<div style="font-family: Franklin Gothic Medium;font-style: normal;font-weight: normal;font-size: 25px;color: #003459; margin: 10px 0px 5px 0px;">'
                                            + 'Julius Obed Wahyu Jati'
                                            + '</div>'
                                            + '<div style="font-family: Franklin Gothic Medium;font-style: normal;font-weight: normal;font-size: 15px;color: #003459;">'
                                            + '0014-Officer'
                                            + '</div>'
                                            + '<div style="font-family: Franklin Gothic Medium;font-style: normal;font-weight: normal;font-size: 15px;color: #003459; margin:30px 200px 0px 0px;">'
                                            + 'Alasan Tidak Memenuhi Syarat:'
                                            + '</div>'
                                            + '<textarea style="border: 1px solid #003459;box-sizing: border-box; width: 22.5em; height: 5em;"></textarea>'
                                            + '</div>',
                                        inputPlaceholder: 'Data pengajuan anggota sudah memenuhi persyaratan',
                                        input: 'checkbox',
                                        showCancelButton: true,
                                        cancelButtonColor: '#FF4F37',
                                        cancelButtonText: 'Tolak',
                                        confirmButtonColor: '#B3B3B3',
                                        confirmButtonText: 'Prosses'
                                    }).then(function (result) {
                                        if (result.value) {
                                            setChecked(check.CheckActive);
                                            Swal.fire({
                                                icon: 'success',
                                                title: 'Pengajuan Diprosess!',
                                                showConfirmButton: false
                                            })
                                        } else if (result.dismiss === Swal.DismissReason.cancel) {
                                            Swal.fire({ icon: 'error', text: "Pengajuan ditolak", showConfirmButton: false });
                                        } else {
                                            console.log(`modal was dismissed by ${result.dismiss}`)
                                        }
                                    })

                                } else if (result.value === 0) {
                                    Swal.fire({ icon: 'error', text: "Check data kembali", showConfirmButton: false });

                                } else {
                                    console.log(`modal was dismissed by ${result.dismiss}`)
                                }
                            })} />
                    </CollapseContent>

                    <FormGroup>
                        <img src={checkedFinal} style={{ width: "35px", marginRight: ".5em" }} />
                        <LabelSub>Final</LabelSub>
                    </FormGroup>
                    <CollapseContent>
                        <Paragraph>
                            Tahap pengesahan ajuan
                            simpanan/pinjaman anggota
                                </Paragraph>
                        <SubmitButton type="submit" value="Action"
                            onClick={() => Swal.fire({
                                html: '<div>'
                                    + '<div style="font-family: Franklin Gothic Medium; font-style: normal; font-weight: normal; font-size: 25px; color: #003459; margin-right: 300px;">'
                                    + 'Diproses'
                                    + '</div>'
                                    + '<div style="border: .5px solid #003459;">'
                                    + '</div>'
                                    + '<div style="font-family: Franklin Gothic Medium;font-style: normal;font-weight: normal;font-size: 15px;color: #003459; margin-right: 265px;">'
                                    + 'Telah Direview Oleh'
                                    + '</div>'
                                    + '<div style="font-family: Franklin Gothic Medium;font-style: normal;font-weight: normal;font-size: 25px;color: #003459; margin: 10px 0px 5px 0px;">'
                                    + 'Julius Obed Wahyu Jati'
                                    + '</div>'
                                    + '<div style="font-family: Franklin Gothic Medium;font-style: normal;font-weight: normal;font-size: 15px;color: #003459;">'
                                    + '0014-Officer'
                                    + '</div>'
                                    + '</div>',
                                inputPlaceholder: 'Data pengajuan anggota sudah memenuhi persyaratan',
                                input: 'checkbox',
                                confirmButtonText: 'Prosses',
                                confirmButtonColor: ' #FFCB37'
                            }).then(function (result) {
                                if (result.value) {
                                    Swal.fire({
                                        text: 'Alasan Tidak Memenuhi Syarat',
                                        html: '<div>'
                                            + '<div style="font-family: Franklin Gothic Medium; font-style: normal; font-weight: normal; font-size: 25px; color: #003459; margin-right: 300px;">'
                                            + 'Diproses'
                                            + '</div>'
                                            + '<div style="border: .5px solid #003459;">'
                                            + '</div>'
                                            + '<div style="font-family: Franklin Gothic Medium;font-style: normal;font-weight: normal;font-size: 15px;color: #003459; margin-right: 265px;">'
                                            + 'Telah Direview Oleh'
                                            + '</div>'
                                            + '<div style="font-family: Franklin Gothic Medium;font-style: normal;font-weight: normal;font-size: 25px;color: #003459; margin: 10px 0px 5px 0px;">'
                                            + 'Julius Obed Wahyu Jati'
                                            + '</div>'
                                            + '<div style="font-family: Franklin Gothic Medium;font-style: normal;font-weight: normal;font-size: 15px;color: #003459;">'
                                            + '0014-Officer'
                                            + '</div>'
                                            + '<div style="font-family: Franklin Gothic Medium;font-style: normal;font-weight: normal;font-size: 15px;color: #003459; margin:30px 200px 0px 0px;">'
                                            + 'Alasan Tidak Memenuhi Syarat:'
                                            + '</div>'
                                            + '<textarea style="border: 1px solid #003459;box-sizing: border-box; width: 22.5em; height: 5em;"></textarea>'
                                            + '</div>',
                                        inputPlaceholder: 'Data pengajuan anggota sudah memenuhi persyaratan',
                                        input: 'checkbox',
                                        showCancelButton: true,
                                        cancelButtonColor: '#FF4F37',
                                        cancelButtonText: 'Tolak',
                                        confirmButtonColor: '#B3B3B3',
                                        confirmButtonText: 'Prosses'
                                    }).then(function (result) {
                                        if (result.value) {
                                            setCheckedFinal(checkFinal.CheckActive);
                                            Swal.fire({
                                                icon: 'success',
                                                title: 'Pengajuan Diprosess!',
                                                showConfirmButton: false
                                            })
                                        } else if (result.dismiss === Swal.DismissReason.cancel) {
                                            Swal.fire({ icon: 'error', text: "Pengajuan ditolak", showConfirmButton: false });
                                        } else {
                                            console.log(`modal was dismissed by ${result.dismiss}`)
                                        }
                                    })

                                } else if (result.value === 0) {
                                    Swal.fire({ icon: 'error', text: "Check data kembali", showConfirmButton: false });

                                } else {
                                    console.log(`modal was dismissed by ${result.dismiss}`)
                                }
                            })} />
                    </CollapseContent>
                </BodyContentSub>
            </Container2>
        </Drawer >
    )
}

export default SubmissionDetail;


const Container1 = styled.div`
width: 682px;
height: fit-content;
padding: 2em;
background: #FFFFFF;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
border-radius: 24px 24px 24px 24px;
`
const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  font-family: Open Sans;
  height: 3em;
`
const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 40%;
  position: relative;
  margin-right: 0.1em;
  font-size: 1em;
  border: ${props => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${props => (props.active ? "none" : "")};
  background-color: ${props => (props.active ? "white" : "lightgray")};
  height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;
  :hover {
    background-color: white;
  }
`
const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
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
margin-bottom: 3em;
`

const HeadContent = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
font-size: 30px;
margin-left: 1em;
`

const BodyContent = styled.div`
display: flex;
margin: 2.5em 0em 0em 0em;
`

const Data = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const Label1 = styled.label`
font-size: 18px;
width: 6em;
margin: .5em 0em;
`
const Label2 = styled.label`
font-size: 18px;
`
const LeftSide = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin: 0em 10em 0em .5em;
`
const RightSide = styled.div`
`
const MidSide = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 20em;
`

const PreviewButton = styled.button`
color: #ffffff;
outline: none;
border: none;
background: #003459;
border-radius: 5px;
font-size: 15px;
width: 7em;
`

const HeadLeft = styled.div``
const HeadMid = styled.div`
display: flex;
flex-direction: column;
`
const HeadRight = styled.div``

const Label = styled.label`
font-size: 20px;
`

const LabelName = styled.label`
font-size: 35px;
margin: 0em;
`
const PhotoContainer = styled.img`
border-radius: 50%;
width: 100px;
height: 100px;
`

const AddressDetail = styled.div`
display: flex;
flex-direction: column;
margin-top: 3em;
`
const AddressGroup = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-right: 1.5em;
`
const FormGroup = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: fit-content;
`

const LabelAddress = styled.label`
font-size: 12px;
margin-right: 1.5em;
`
const LabelAddressVal = styled.label`
font-size: 17px;
`

const Table = styled.table`
`
const TableRow = styled.tr`
margin: .5em 0em;
`
const TableData = styled.td`
font-size: 20px;
width: 5em;
`

const Container2 = styled.div`
width: fit-content;
height: fit-content;
padding: 2em;
margin-left: 2em;
background: #FFFFFF;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
border-radius: 24px 24px 24px 24px;
`

const SubmitButton = styled.input`
background: #FFCB37;
border: none;
border-radius: 50px;
font-size: 20px;
text-align: center;
color: #003459;
outline: none;
margin: 0em 0em 0em 4.5em;
width: 100px;
height: 35px;
`
const BodyContentSub = styled.div`
display: flex;
flex-direction: column;
width: 300px;
margin: 2.5em 0em 0em 0em;
`

const LabelSub = styled.div`
font-size: 35px;
`

const AcorTog = styled.button`
outline: none;
border: none;
background: none;
`
const Paragraph = styled.p`
font-size: 15px;
font-style: italic;
color: #787878;
`

const CollapseContent = styled.div`
`

const LabelDate = styled.div`
font-size: 15px;
margin:0em 0em 0em 3em;
`