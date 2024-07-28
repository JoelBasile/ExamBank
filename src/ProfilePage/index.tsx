import React from 'react';
import { uploadData } from 'aws-amplify/storage';
import { Authenticator } from '@aws-amplify/ui-react'


function ProfilePage() {
    const [file, setFile] = React.useState();

    const handleChange = (event: any) => {
        setFile(event.target.files[0]);
    };


    return (
        <Authenticator>
            {({ signOut, user }) => (
                <div>
                    <input type="file" onChange={handleChange} />
                    <button disabled={!file}
                        onClick={() => {
                            if (file) {
                                uploadData({
                                    path: `profile-pictures/${user?.userId}/test.jpg`,
                                    data: file,
                                })
                                window.alert("File uploaded successfully")
                            } else {
                                window.alert("Please select a file to upload")
                            }
                        }}
                    >
                        Upload
                    </button>
                    <button onClick={signOut}>Sign out</button>
                </div>
            )}
        </Authenticator>
    );
};

export default ProfilePage;