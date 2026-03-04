import React from "react";

interface ProfileImageProps {
    src?: string;
    alt?: string;
}

function ProfileImage({ src = "/assets/images/profile.jpg", alt = "Sathwik Acharya" }: ProfileImageProps) {
    const [hasError, setHasError] = React.useState(false);

    return (
        <div className="about-grid-photo">
            <div className="overlay" />
            <div className="overlay-border" />
            <div className="about-grid-photo-container">
                {hasError || !src ? (
                    <div className="profile-placeholder">
                        <span>SA</span>
                    </div>
                ) : (
                    <img
                        src={src}
                        alt={alt}
                        onError={() => setHasError(true)}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                )}
            </div>
        </div>
    );
}

export default ProfileImage;
