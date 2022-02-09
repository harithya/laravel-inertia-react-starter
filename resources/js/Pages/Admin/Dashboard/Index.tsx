import { MainLayout, Section } from '@/Components'
import React from 'react'

const Dashboard = () => {
    return (
        <Section title='Dashboard' subtitle='Hey there! Welcome to Ping CRM, a demo app designed to help illustrate how Inertia.js works.'>

        </Section>
    )
}

Dashboard.layout = (children: JSX.Element) => <MainLayout children={children} />

export default Dashboard