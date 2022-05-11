import { Row, Col } from 'vant'
import { Aside, Footer, Header, Layout, Main } from './layout'

const components = {
  CRow: Row,
  CCol: Col,
  Aside,
  Footer,
  Header,
  Layout,
  Main,
}

const install = (app) => {
  Object.keys(components).forEach((key) => {
    if (['CRow', 'CCol'].includes(key)) {
      app.component(key, components[key])
    } else {
      app.component(components[key].name, components[key])
    }
  })
}

export default { install }
