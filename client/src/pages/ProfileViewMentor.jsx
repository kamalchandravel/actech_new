import React from 'react'
import ProfileViewMentorComponent from '../components/superadmin/usermanager/ProfileViewMentor.component';
import AdminLayout from '../components/layout/AdminLayout';
const ProfileViewMentor = ({classes,children}) => {
    return(
        <AdminLayout>
             <ProfileViewMentorComponent />
        </AdminLayout>
           
        
    )
}
export default ProfileViewMentor;
