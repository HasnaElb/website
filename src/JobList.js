import React, { useState, useEffect } from 'react';

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Example: Fetching job listings from a backend API (dummy data for now)
    setJobs([
      { id: 1, title: 'Frontend Developer', company: 'Tech Corp', type: 'Full-time', location: 'Remote' },
      { id: 2, title: 'Backend Developer', company: 'Dev Solutions', type: 'Part-time', location: 'Remote' }
    ]);
  }, []);

  return (
    <div>
      <h2>Available Remote Jobs</h2>
      {jobs.map((job) => (
        <div className="job" key={job.id}>
          <h3>{job.title}</h3>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Type:</strong> {job.type}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <a href={`/apply/${job.id}`}>Apply Now</a>
        </div>
      ))}
    </div>
  );
}

export default JobList;