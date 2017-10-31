export function filterData(event,data) {
    event.preventDefault();
    const regex = new RegExp(event.target.value, 'i');
    const filtered = data.filter(function(datum) {
      return (datum.get('title').search(regex) > -1);
    });
