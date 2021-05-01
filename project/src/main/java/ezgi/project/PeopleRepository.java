package ezgi.project;

import org.springframework.data.jpa.repository.JpaRepository;

interface PeopleRepository extends JpaRepository<People, Long>{
}
