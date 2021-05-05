
export class MailController extends React.Component {
    state = {
        filterBy: {
            text: null,
            isSend: false,
            isFavorite: false,
            isRead: false,
        }
    }


    render() {
        return (
            <div className="controller-container container flex space-between align-center">
                <button>➕</button>
                <div className="mail-filter">

                    <label htmlFor="text-input">🔍</label>
                    <input name="text" type="text" id="text-input" placeholder="Search" />
                    <select name="filter-drop">
                        <option value="all">All</option>
                        <option value="isSend">Sent</option>
                        <option value="isFavorite">Favorite</option>
                        <option value="isRead">Unread</option>
                    </select>
                </div>

            </div>
        )
    }
}