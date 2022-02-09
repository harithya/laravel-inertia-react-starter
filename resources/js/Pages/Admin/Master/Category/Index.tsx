import { MainLayout, Section, Table, Td, Tr } from '@/Components'
import TableSection from '@/Components/layout/TableSection'
import React from 'react'

const Category = () => {
    return (
        <Section title='Master / Kategori' subtitle='50 Enteries Found'>
            <TableSection href='/'>
                <Table thead={['No', "Kategori", "Aksi"]}>
                    <tbody>
                        <Tr>
                            <Td>1</Td>
                            <Td>Laptop</Td>
                            <Td>Aksi</Td>
                        </Tr>
                    </tbody>
                </Table>
            </TableSection>
        </Section>
    )
}

Category.layout = (children: JSX.Element) => <MainLayout children={children} />

export default Category