'use client'
import React from 'react'
import { Card,CardContent,Typography,CardActions,Button, Grid2,List,ListItem,ListItemText,Divider,Box } from '@mui/material'
type Feature={
    primary:string,
    secondary:string
}
type Project={
    title:string,
    desc:string,
    features:Feature[],
    link:string
    hostLink:string
}
const ProjectCard = ({projects}:{projects:Project[]}) => {

    return (
    <Grid2 spacing={2} minHeight={'inherit'} display={'flex'} alignItems={'center'} container>
        {projects.map((project,i)=>{
            return(
                <Grid2 key={i} size={{xs:12,md:12}}>
                    <Card  variant='outlined'>
                        <CardContent>
                            <Typography variant="h5" component="div">
                              {project.title}
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{project.desc}</Typography>
                        
                                <List dense>                                
                                    {project.features.map((feature,i)=>{
                                        return(
                                            <Box  key={i}>
                                                <ListItem >
                                                    <ListItemText    
                                                        primary={feature.primary}
                                                        secondary={feature.secondary}
                                                    />
                                                </ListItem>
                                                <Divider component="li" />
                                            </Box>
                                        )
                                    })}
                                </List>
                  
                        </CardContent>
                        <CardActions>
                            <Button sx={{textTransform:'none'}} href={project.link} target='_blank' rel='noopener noreferrer'>Link to Github Repository</Button>
                            {project.hostLink ?<Button sx={{textTransform:'none'}} href={project.hostLink} target='_blank' rel='noopener noreferrer'>Link Website</Button>:<></>}
                        </CardActions>
                    </Card>
                </Grid2>
            )
        })}
    </Grid2>
    )
}

export default ProjectCard