import { Col, Row } from 'react-bootstrap'
import TotalPosts from '../components/TotalPosts'
import MostViewedPosts from '../components/MostViewedPosts'
import CategoriesChart from '../components/CategoriesChart'
import AuthorRanking from '../components/AuthorRanking'
import PageMetaData from '@/components/PageMetaData'

const ReportPosts = () => {
  return (
    <>
      <PageMetaData title="Relatório" />

      <Row>
        <Col md={12} lg={12}>
          <TotalPosts />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <MostViewedPosts />
        </Col>
        <Col md={6} lg={6}>
            <AuthorRanking />
        </Col>
        <Col md={12} lg={12}>
          <CategoriesChart />
        </Col>
      </Row>
    </>
  )
}

export default ReportPosts
