import classes from "./NotFoundPage.module.css";

const NotFoundPage = () => {
    return (
        <section className={classes["page_404"]}>
            <div className={classes["container"]}>
                <div className={classes["row"]}>
                    <div className={classes["col-sm-12 "]}>
                        <div className={classes["col-sm-10 col-sm-offset-1  text-center"]}>
                            <div className={classes["four_zero_four_bg"]}>
                                <h1 className={classes["text-center "]}>404</h1>


                            </div>

                            <div className={classes["contant_box_404"]}>
                                <h3 className={classes["h2"]}>
                                    Look like you're lost
                                </h3>

                                <p>the page you are looking for not avaible!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;