import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { updateUser } from "../store/actions/authActions";
import UpdateProfileView from "../views/updateProfileView";

class UpdateProfile extends Component {
  state = {
    username: this.props.username,
    favoriteActor: this.props.favoriteActor,
    gender: this.props.gender,
  };
  handleChange = (e) => {
    this.setState({
        username: this.state.username,
        favoriteActor: this.state.favoriteActor,
        gender: this.state.gender,
    });

    this.setState({
        [e.target.id]: e.target.value,
    });
  };

  handleChangeRadio = (e) => {
    this.setState({
        username: this.state.username,
        favoriteActor: this.state.favoriteActor,
        gender: e.target.value,
    });
};

  handleUpdate = () => {
    this.props.updateUser(this.state);
  };

  render() {

    if (!this.props.auth.uid) {
      return <Redirect to="/" />;
    }

    return UpdateProfileView({
        username: this.props.username,
        favoriteActor: this.props.favoriteActor,
        gender: this.props.gender,
        profile: this.props.profile,
        handleChange: this.handleChange,
        handleUpdate: this.handleUpdate,
        handleChangeRadio: this.handleChangeRadio,
    });
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    username: state.firebase.profile.username,
    favoriteActor: state.firebase.profile.favoriteActor,
    gender: state.firebase.profile.gender,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
