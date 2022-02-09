import React from 'react'
import { Action, MainLayout, Section, Table, Td, Tr } from '@/Components'
import TableSection from '@/Components/layout/TableSection'
import { InertiaPage, PaginationProps, UserProps } from '@/Types'

interface Props {
    users: PaginationProps<UserProps>
}
const ManagementUser: InertiaPage<Props> = ({ users }) => {
    return (
        <Section title='Management User' dataCount={users.total}>
            <TableSection href='/' pagination={users.links}>
                <Table thead={['No', "Username", "Nama", "Email", ""]}>
                    <tbody>
                        {users.data.map((user, index) => <Tr key={`tr-${index}`}>
                            <Td>{user.id}</Td>
                            <Td>{user.username}</Td>
                            <Td>{user.name}</Td>
                            <Td>{user.email}</Td>
                            <Td>
                                <Action />
                            </Td>
                        </Tr>)}
                    </tbody>
                </Table>
            </TableSection>
        </Section>
    )
}

ManagementUser.layout = (children: JSX.Element) => <MainLayout children={children} />

export default ManagementUser