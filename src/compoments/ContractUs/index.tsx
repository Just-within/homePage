import styled from 'styled-components';

const Header = styled.div`
    color: black;
`;

const Label = styled.label`
    color: #666666;
`;

export default function ContractUs() {
    return (
        <section id="contactUs" className="contact-parlex">
            <div className="parlex-back">
                <div className="container">
                    <div className="row">
                        <Header className="heading text-center">
                            <h2>Contact Us</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </Header>
                    </div>
                    <div className="row mrgn30">
                        <form method="post" action="" id="contactfrm" role="form">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <Label htmlFor="name">Name</Label>
                                    <input type="text" className="form-control" name="name" id="name" placeholder="Enter name"
                                        title="Please enter your name (at least 2 characters)" />
                                </div>
                                <div className="form-group">
                                    <Label htmlFor="email">Email</Label>
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Enter email"
                                        title="Please enter a valid email address" />
                                </div>
                                <div className="form-group">
                                    <Label htmlFor="comments">Comments</Label>
                                    <textarea
                                        name="comment"
                                        className="form-control"
                                        id="comments"
                                        style={{ marginBottom: 15 }}
                                        cols={3}
                                        rows={5}
                                        placeholder="Enter your message…"
                                        title="Please enter your message (at least 10 characters)"
                                    >
                                    </textarea>
                                    <button name="submit" type="submit" className="btn btn-lg btn-primary" id="submit">Submit</button>
                                </div>
                                <div className="result"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}