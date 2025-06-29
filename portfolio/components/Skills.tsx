'use client'
import { Box, Container, Grid2, Typography } from '@mui/material'
import React from 'react'
import ProgressBarWithLabel from './ProgressBarWithLabel';


const skillSets = [
    { name: 'JavaScript', value: 85 },
    { name: 'React', value: 85 },
    { name: 'Python', value: 70 },
    { name: 'Flask', value: 70 },
    { name: 'SQLAlchemy', value: 70 },
    { name: 'Angular 20+', value: 70 },
    { name: 'Firebase - Cloud Firestore', value: 70 },
    { name: 'Mongoose', value: 75 },
    { name: 'Material UI', value: 80 },
    { name: 'NodeJS', value: 75 },
    { name: 'NextJS', value: 70 },
    { name: 'AuthJS', value: 70 },
    { name: 'Flutter', value: 65 },
    { name: 'Git', value: 70 },

]
const Skills = () => {


    return (
        <>
            {skillSets.map((skill, i) => {
                return (
                    <Grid2 key={i} className="" size={{ xs: 12, md: 6 }}>
                        <Box marginLeft={'8px'}>
                            <Typography
                                variant="subtitle1"
                                sx={{ color: 'text.secondary' }}
                            >{skill.name}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ width: '100%', mx: 1 }}>
                                <ProgressBarWithLabel value={skill.value.toString()} />
                            </Box>
                        </Box>
                    </Grid2>
                )

            })}</>


    )
}

export default Skills