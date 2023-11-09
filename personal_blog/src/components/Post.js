import React from 'react'
import { Card } from 'react-bootstrap'
import { format, utcToZonedTime } from 'date-fns-tz'

const Post = ({ username, content, timestamp }) => {
  const ISODateString = timestamp
  const timezone = 'America/Sao_Paulo'
  const zonedDate = utcToZonedTime(ISODateString, timezone)
  const formattedDate = format(zonedDate, 'dd/MM/yyyy HH:mm:ss', { timeZone: timezone })

  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title>{username}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{formattedDate}</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}

export default Post