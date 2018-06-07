import { drawerWidth } from 'MainMenu/styles'

export default theme => ({
  flex: {
    flex: 1,
  },
  logo: {
    height: 42,
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
})

