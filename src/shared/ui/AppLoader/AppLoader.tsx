import {classNames} from "shared/lib/classNames";
import './AppLoader.scss'

interface AppLoaderProps {
    className?: string
}

export const AppLoader = ({className}: AppLoaderProps) => {
    return (
        <div className={classNames('', {}, [className])}>
            <span className="loader"></span>
        </div>
    );
};