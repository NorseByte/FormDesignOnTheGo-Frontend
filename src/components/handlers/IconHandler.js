import PreviewIcon from '@material-ui/icons/Visibility';
import SaveIcon from '@material-ui/icons/Save';
import CreateIcon from '@material-ui/icons/Create';
import ErrorIcon from '@material-ui/icons/Error';
import MenuIcon from '@material-ui/icons/Menu';
import GitIcon from '@material-ui/icons/GitHub';
import InfoIcon from '@material-ui/icons/LiveHelp'

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

    return <ErrorIcon/>
}

export default IconHandler;