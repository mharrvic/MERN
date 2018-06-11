import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '@hackclub/design-system/dist/Card';

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: '81a2d87e63baea587789',
      clientSecret: '4976a486677b8a9151e34c3739bcaf408ca6b71b',
      count: 5,
      sort: 'created: asc',
      repos: [],
    };
  }

  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/mharrvic/repos?per_page=5&sort=created:asc&client_id=81a2d87e63baea587789&client_secret=4976a486677b8a9151e34c3739bcaf408ca6b71b`
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({ repos: data });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;

    const repoItems = repos.map(repo => (
      <Card boxShadowSize="lg" borderWidth={0} borderRadius={3} p={5} my={2}>
        <div key={repo.id}>
          <div className="row">
            <div className="col-md-6">
              <h4>
                <Link to={repo.html_url} className="text-info" target="_blank">
                  {repo.name}
                </Link>
              </h4>
              <p>{repo.description}</p>
            </div>
            <div className="col-md-6">
              <span className="badge badge-info mr-1">
                Stars: {repo.stargazers_count}
              </span>
              <span className="badge badge-secondary mr-1">
                Watchers: {repo.watchers_count}
              </span>
              <span className="badge badge-success">
                Forks: {repo.forks_count}
              </span>
            </div>
          </div>
        </div>
      </Card>
    ));
    return (
      <div ref="myRef">
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {repoItems}
      </div>
    );
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired,
};

export default ProfileGithub;
