'use client'
import Skills from '@components/Skills'
import React, { FormEvent } from 'react'
import Form from '@components/interactions/Form'
import { Tab,Tabs,Box, Typography,Grid2,List,ListItem,ListItemText, Paper, Divider, Container,ListSubheader } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { User } from '@interfaces/User'
// references on how to handle onsubmit for this form using form data
// https://stackoverflow.com/a/56071983/27080552
// article reference: https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
const SkillsPage = () => {
    const theme = useTheme();
    const scrollable = useMediaQuery(theme.breakpoints.down('md'));
    const [loading, setLoading] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const [responseMessage,setResponseMessage]=React.useState('')
    const [isError,setIsError]=React.useState(false);
    const [allUsers,setAllUsers]=React.useState<User[]>([])
    React.useEffect(()=>{
        fetch(`api/interaction/users`).then((res)=>{
            if(res.ok){
                res.json().then((data)=>{
                    setAllUsers(data)
                })
            }
        })
    },[])

    function CustomTabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}

            {...other}
          >
            {value === index && <Box sx={{ p: 3}}>{children}</Box>}
          </div>
        );
      }
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setResponseMessage('')
        setIsError(false)
      };
    function a11yProps(index: number) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
    const onRegisterSubmit = (event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setLoading(true)
        const formData = new FormData(event.currentTarget);
        fetch(`api/interaction/users/register`,{
            method:'POST',
            body:formData
        }).then((res)=>{
            if(res.ok){
                setIsError(false)
                res.text().then((text)=>{
                    setResponseMessage(text)
                })     
            }else{
                setIsError(true)
                res.text().then((text)=>{
                    setResponseMessage(text)
                })  
            }
        }).catch((err)=>{
            setIsError(true)
            setResponseMessage(err)

        }).finally(()=>{
            setLoading(false)
            fetch(`api/interaction/users`).then((res)=>{
                if(res.ok){
                    res.json().then((data)=>{
                        setAllUsers(data)
                    })
                }
            })
        })


    }
    const onLoginSubmit = (event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setLoading(true)
        const formData = new FormData(event.currentTarget);
        fetch(`api/interaction/users/login`,{
            method:'POST',
            body:formData
        }).then((res)=>{
            if(res.ok){
                setIsError(false)
                res.text().then((text)=>{
                    setResponseMessage(text)
                })  
            }else{
                setIsError(true)
                res.text().then((text)=>{
                    setResponseMessage(text)
                }) 
            }
        }).catch((err)=>{
            setIsError(true)
            setResponseMessage(err)

        }).finally(()=>{
            setLoading(false)
        })
    }

    const onNewPasswordSubmit = (event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setLoading(true)
        const formData = new FormData(event.currentTarget);
        fetch(`api/interaction/users`,{
            method:'PUT',
            body:formData
        }).then((res)=>{
            if(res.ok){
                setIsError(false)
                res.text().then((text)=>{
                    setResponseMessage(text)
                })  
            }else{
                setIsError(true)
                res.text().then((text)=>{
                    setResponseMessage(text)
                }) 
            }
        }).catch((err)=>{
            setIsError(true)
            setResponseMessage(err)

        }).finally(()=>{
            setLoading(false)
            fetch(`api/interaction/users`).then((res)=>{
                if(res.ok){
                    res.json().then((data)=>{
                        setAllUsers(data)
                    })
                }
            })
        })
    }
    const onDeleteSubmit = (event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setLoading(true)
        const formData = new FormData(event.currentTarget);
        fetch(`api/interaction/users/delete`,{
            method:'POST',
            body:formData
        }).then((res)=>{
            if(res.ok){
                setIsError(false)
                res.text().then((text)=>{
                    setResponseMessage(text)
                })  
            }else{
                setIsError(true)
                res.text().then((text)=>{
                    setResponseMessage(text)
                }) 
            }
        }).catch((err)=>{
            setIsError(true)
            setResponseMessage(err)

        }).finally(()=>{
            setLoading(false)
            fetch(`api/interaction/users`).then((res)=>{
                if(res.ok){
                    res.json().then((data)=>{
                        setAllUsers(data)
                    })
                }
            })
        })
    }
  return (
    <Box marginTop={'1em'} width={'100%'}>
        <Container maxWidth={'xl'}>  
            <Grid2 spacing={2} container>

                <Grid2 size={{xs:12,md:6}}>
                    <Typography textAlign={'center'} sx={{padding:'0.5em'}} variant='h6'>CRUD operations playground for users</Typography>
                    <Divider/>
                    <Box >
                        <Box sx={{width: '100%', borderBottom: 1, borderColor: 'divider' }}>
                          <Tabs centered={scrollable?false:true} value={value} onChange={handleChange} aria-label="basic tabs example"  variant={scrollable?"scrollable":"standard"} scrollButtons="auto" allowScrollButtonsMobile>
                              <Tab label="Register" {...a11yProps(0)} />
                              <Tab label="Login" {...a11yProps(1)} />
                              <Tab label="New Password" {...a11yProps(2)} />
                              <Tab label="Delete User" {...a11yProps(3)} />
                          </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>            

                            <Form alertSeverity={'info'} formHelperText='Register with an Email and a Password' isError={isError} responseMessage={responseMessage} loading={loading} confirmPassword buttonText='Register' onSubmit={onRegisterSubmit}/>

                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>            
                            <Form alertSeverity={'info'}  formHelperText='Login with Email and Password from Registration' isError={isError} responseMessage={responseMessage} loading={loading} buttonText='Login' onSubmit={onLoginSubmit}/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>             
                            <Form alertSeverity={'info'} color='warning' formHelperText='Update password with Email, Password, and New Password ' isError={isError} responseMessage={responseMessage} loading={loading} updatePassword confirmPassword buttonText='Update Password' onSubmit={onNewPasswordSubmit}/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3}>
                          <Form alertSeverity={'error'} formHelperText='Delete user with Email and Password' isError={isError} responseMessage={responseMessage} loading={loading} deleteUser buttonText='Delete User' onSubmit={onDeleteSubmit}/>
                        </CustomTabPanel>
                    </Box>

                </Grid2>
                <Grid2 display={'flex'} justifyContent={'center'} alignItems={'center'} size={{xs:12,md:6}}>
                    <Paper elevation={1} sx={{marginX:'1.5em',width:'fit-content',paddingBottom:'0.5em',maxHeight:'300px',overflow: 'auto'}}>
                        <ListSubheader><Typography sx={{padding:'0.5em'}} variant='h6'>All users currently in database</Typography></ListSubheader>
                     
                        <Divider/>
                        <List >
                            {allUsers && allUsers.map((user)=>{
                                return(
                                    <ListItem key={user.email}>
                                        <ListItemText
                                          primary={user.email}
                                        />
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Paper>
                </Grid2>

                        
                <Grid2 width={'inherit'} minHeight={'inherit'} size={{xs:12,md:12}}>

                        <Skills/>

                </Grid2>
            </Grid2>
        </Container>
    </Box>

  )
}

export default SkillsPage