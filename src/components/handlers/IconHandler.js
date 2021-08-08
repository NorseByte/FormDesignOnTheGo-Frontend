import PreviewIcon from '@material-ui/icons/Visibility';
import SaveIcon from '@material-ui/icons/Save';
import CreateIcon from '@material-ui/icons/Create';
import ErrorIcon from '@material-ui/icons/Error';
import MenuIcon from '@material-ui/icons/Menu';
import GitIcon from '@material-ui/icons/GitHub';
import InfoIcon from '@material-ui/icons/LiveHelp'
import LocationIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import CorpoIcon from '@material-ui/icons/List';
import ArchiveIcon from '@material-ui/icons/Archive';

const IconHandler = (props) => {
    if (props.icon === 'save') {
        return <SaveIcon/>
    }
    if (props.icon === 'preview') {
        return <PreviewIcon/>
    }
    if (props.icon === 'create') {
        return <CreateIcon/>
    }
    if (props.icon === 'menu') {
        return <MenuIcon />
    }
    if (props.icon === 'github') {
        return <GitIcon />
    }
    if (props.icon === 'info') {
        return <InfoIcon />
    }
    if (props.icon === 'pos') {
        return <LocationIcon />
    }
    if (props.icon === 'phone') {
        return <PhoneIcon />
    }
    if (props.icon === 'email') {
        return <EmailIcon />
    }
    if (props.icon === 'corpo') {
        return <CorpoIcon />
    }
    if(props.icon === 'files') {
        return <ArchiveIcon />
    }

    return <ErrorIcon/>
}

export default IconHandler;