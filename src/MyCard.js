import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import {
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhone,
  FaVoicemail,
} from "react-icons/fa";

const MyCard = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
        />
        <CardTitle className="text-primary">
          <h1>
            <span> {details.name?.title}</span>
            <span> {details.name?.first}</span>
            <span> {details.name?.last}</span>
          </h1>
          <p>{details.email}</p>
          <FaPhone /> {details.phone}
          <p>{details.dob?.age}</p>
        </CardTitle>
      </CardBody>
    </Card>
  );
};
export default MyCard;
