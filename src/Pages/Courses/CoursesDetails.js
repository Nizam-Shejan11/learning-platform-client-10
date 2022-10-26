import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CoursesDetails = ({ course }) => {
  const { name, image, its_title, its_paragraph, time, access, price } = course;
  return (
    <div>
      <Card className=" w-50 mx-auto mt-5 mb-5 text-center">
        <Card.Header className="fs-3"> {name} </Card.Header>
        <Card.Img className="mx-auto my-auto" variant="top" src={image} />
        <Card.Body>
          <Card.Title> {its_title} </Card.Title>
          <Card.Text>
            {/* {its_paragraph} */}
            {its_paragraph.length > 200 ? (
              <>
                {its_paragraph.slice(0, 200) + "..."} <Link>Read More</Link>{" "}
              </>
            ) : (
              its_paragraph
            )}
          </Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-item-center  fs-6 text-muted">
          <p> Duration: {time} </p>
          <p> Access: {access} </p>
          <p> Price: {price} </p>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CoursesDetails;
