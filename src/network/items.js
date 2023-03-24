export async function loadItemsList(pageSize, offset) {
    const query = { pageSize, offset };
    if (!query.offset) delete query.offset;
    // const params = new URLSearchParams(query);
    const url = `https://api.airtable.com/v0/appZOkOD2vNGJJPNf/tblZAr1AJ0kI9DThK`;
    const token = "pat7FCd2YDqfotq1t.ad83fdff52fe393065df9a066e6a74770581cfacc310c1947bd9167323823b76";

    const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    const data = await response.json();

    data.records = data.records.map(el => el.fields);

    return data;
}