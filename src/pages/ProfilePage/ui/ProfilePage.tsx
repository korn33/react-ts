import {classNames} from "shared/lib/classNames";
import cls from './ProfilePage.module.scss'
import {useTranslation} from "react-i18next";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {profileReducer} from "entities/Profile";

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({className}: ProfilePageProps) => {
    return (
        <DynamicModuleLoader name={"profile"} reducer={profileReducer}>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                profile_page
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage