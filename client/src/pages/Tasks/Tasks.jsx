import { useParams, Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import TasksList from "../../components/TaskComponents/TasksList.jsx";
// import PowerList from '../../components/TaskComponents/PowerList';
import SingleTask from "../../components/TaskComponents/SingleTaskModal.jsx";
import AddTaskBtn from "../../components/TaskComponents/AddTaskBtn.jsx";
import { ADD_TASK } from "../../utils/mutations";
import Auth from "../../utils/auth";
import style from "./Tasks.module.css";
import { QUERY_USER } from "../../utils/queries";

function Tasks() {
	const [addTask] = useMutation(ADD_TASK);
	const createTask = (taskData) => {
		addTask({ variables: taskData })
			.then((response) => {
				console.log("Task created:", response.data.addTask);
			})
			.catch((error) => {
				console.error("Error creating task:", error);
			});
	};
	// might need to use auth0_id instead of userId
	const { userId } = useParams();
	const { loading, data } = useQuery(QUERY_USER, {
		variables: { userId: userId },
	});

	const user = data?.user || {};
	console.log(data);

	if (loading) {
		return <div>Loading...</div>;
	}
	console.log(data);
	return (
		<div className={style.mainTask}>
			<section className="cards">
				<article className="oneCard">
					<h2 className="cardTitle">ALL TASKS</h2>
					<ul className="cardText">
						<li className="liItem">
							The list of Tasks for this user would go here ;hds af;h
							ds;fhdsa;jfhsda ;jfhdskajh fgkjdsahfj;d hs fsdafs dafg dsgafdsf
						</li>
					</ul>
					<ul className="cardText">
						<li className="liItem">
							The list of Tasks for this user would go hereds
							afdsagfdagfadgfdagfadf dsfdsagd
						</li>
					</ul>
					<ul className="cardText">
						<li className="liItem">
							The list of Tasks for this user would go hereag fdagadsffda
							sfgdsafdsf
						</li>
					</ul>
					<ul className="cardText">
						<li className="liItem">
							The list of Tasks for this user would go here asdfdasfdsa fds
						</li>
					</ul>
					<ul className="cardText">
						<li className="liItem">
							The list of Tasks for this user would go here
						</li>
					</ul>
					<ul className="cardText">
						<li className="liItem">
							The list of Tasks for this user would go here
						</li>
					</ul>
					{/* task list card */}
					<TasksList tasks={user.tasks} />
					<div className="dashButtonContainer">
						<AddTaskBtn createTask={createTask} />
					</div>
				</article>
			</section>

			{/* single task modal commenting out SingleTask as it seemed to be causing some issues and wasn't fully built out to be a modal*/}
			{/* <SingleTask /> */}
		</div>
	);
}
export default Tasks;
