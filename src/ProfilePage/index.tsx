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
            {({ user }) => (
                <div>
                    <input type="file" onChange={handleChange} />
                    <button disabled={!file}
                        onClick={() =>
                        { if (file) {
                            uploadData({
                                path: `picture-submissions/${file}`,
                                data: file,
                            })}
                        }}
                    >
                        Upload
                    </button>
                </div>
            )}
        </Authenticator>
    );
};

export default ProfilePage;