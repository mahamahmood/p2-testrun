
const React = require("react");

class Index extends React.Component {
    render() {
        const { vegetables } = this.props;
        return (
            <>
                <h1>Vegetables Index Page</h1>
                <nav>
                    <a href="/vegetables/new">Create a New Vegetable</a>
                </nav>
                {vegetables?.map((vegetable) => {
                    return (
                        <div key={vegetable._id}>
                            <p><a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a><br></br>
                                {vegetable.isGreen ? `It is green` : `It is not green`}</p>
                            {/* /vegetables/id_of_the_vegetable/override_post_method */}
                            <form action={`/vegetables/${vegetable._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="delete" />
                            </form>
                            {/* Create a link to the edit route /vegetables/id_of_vegetable/edit */}
                            <a href={`/vegetables/${vegetable._id}/edit`}>Edit</a>
                        </div>
                    );
                })}
            </>
        );
    }
}

module.exports = Index;